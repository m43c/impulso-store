import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<RegistrationPage />} />
                    <Route path="/signin" element={<LoginPage />} />

                    <Route element={<ProtectedRoute />}></Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
