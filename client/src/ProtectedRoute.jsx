import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const { isAuthenticated } = useAuth();

    const authentication = localStorage.getItem("isAuthenticated");
    const login = localStorage.getItem("isLogged");

    if ((authentication && login) || isAuthenticated) {
        return <Outlet />;
    } else {
        return <Navigate to="/signin" replace />;
    }
}

export default ProtectedRoute;
