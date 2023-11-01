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
    const [loading, setLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    const persistUser = (userData) =>
        localStorage.setItem("user", JSON.stringify(userData));

    const removeUser = () => localStorage.removeItem("user");

    const signup = async (user) => {
        try {
            const res = await signupRequest(user);
            setUser(res.data);
        } catch (error) {
            setErrors(error.response.data);
        }
    };

    const signin = async (user) => {
        try {
            const res = await signinRequest(user);

            persistUser(res.data);

            setUser(res.data);
            setIsAuthenticated(true);
            setIsLogged(true);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }

            setErrors([error.response.data.message]);
        }
    };

    const logout = () => {
        Cookies.remove("token");

        removeUser();

        setUser(null);
        setIsAuthenticated(false);
        setIsLogged(false);
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
        async function checkSignin() {
            const cookies = Cookies.get();

            if (!cookies.token) {
                Cookies.remove("token");

                setUser(null);
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }

            try {
                const res = await verifyTokenRequest(cookies.token);

                if (!res.data) {
                    Cookies.remove("user");

                    setUser(null);
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }

                setUser(res.data);
                setIsAuthenticated(true);
                setLoading(false);
            } catch (error) {
                Cookies.remove("token");

                setUser(null);
                setIsAuthenticated(false);
                setLoading(false);
            }
        }

        checkSignin();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                errors,
                isAuthenticated,
                isLogged,
                loading,
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
