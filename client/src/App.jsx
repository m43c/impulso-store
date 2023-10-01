import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/signup" element={<RegistrationPage />} />
                <Route path="/signin" element={<h1>Sign In</h1>} />
                <Route path="/logout" element={<h1>Logout</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
