import { createContext, useContext, useEffect, useState } from "react";
import {
  signupRequest,
  signinRequest,
  profileRequest,
  verifyTokenRequest,
} from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const persistUser = (userData) =>
    localStorage.setItem("user", JSON.stringify(userData));

  const cleanStorage = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("isAuthenticated");
  };

  const cleanUserSession = () => {
    setUser(null);
    setIsAuthenticated(false);
    cleanStorage();
  };

  const signup = async (user) => {
    try {
      const res = await signupRequest(user);

      setUser(res.data);
      persistUser(res.data);
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data);
      } else {
        console.error("Undefined response error:", error);
      }
    }
  };

  const signin = async (user) => {
    try {
      const res = await signinRequest(user);

      setUser(res.data);
      setIsAuthenticated(true);

      persistUser(res.data);

      localStorage.setItem("isLogged", true);
      localStorage.setItem("isAuthenticated", true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }

      setErrors([error.response.data.message]);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);

    cleanStorage();
  };

  const profile = async () => {
    try {
      const res = await profileRequest();
      setUser(res.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    (async () => {
      const cookies = Cookies.get();

      if (!cookies.token) {
        cleanUserSession();
        return;
      }

      try {
        const response = await verifyTokenRequest(cookies.token);

        if (!response.data) {
          cleanUserSession();
          return;
        }

        setUser(response.data);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
        cleanUserSession();
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        errors,
        isAuthenticated,
        logout,
        profile,
        signin,
        signup,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
