import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<RegistrationPage />} />
                    <Route path="/signin" element={<LoginPage />} />

                    <Route element={<ProtectedRoute />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </AuthProvider>
    );
}

export default App;
