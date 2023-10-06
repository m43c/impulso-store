import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import ProductFormPage from "./pages/ProductFormPage";

function App() {
    return (
        <AuthProvider>
            <ProductProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/signup" element={<RegistrationPage />} />
                        <Route path="/signin" element={<LoginPage />} />

                        <Route element={<ProtectedRoute />}>
                            <Route
                                path="/add-product"
                                element={<ProductFormPage />}
                            />
                            <Route
                                path="/products"
                                element={<h1>Products Page</h1>}
                            />
                            <Route
                                path="/products/:id"
                                element={<h1>Update Product</h1>}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ProductProvider>
            <Footer />
        </AuthProvider>
    );
}

export default App;
