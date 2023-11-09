import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ProductFormPage from "./pages/ProductFormPage";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />

            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/signup" element={<RegistrationPage />} />

              <Route path="/signin" element={<LoginPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/add-product" element={<ProductFormPage />} />

                <Route path="/products" element={<ProductsPage />} />

                <Route path="/add-product/:id" element={<ProductFormPage />} />
              </Route>
            </Routes>

            <Footer />

            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
