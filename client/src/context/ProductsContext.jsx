import { createContext, useContext, useState } from "react";

export const ProductContext = createContext();

export const useProducts = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useProducts must be used within an ProductProvider");
    }

    return context;
};

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};
