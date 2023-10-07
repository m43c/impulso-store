import { createContext, useContext, useState } from "react";
import { createProductRequest } from "../api/products";

export const ProductContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("useProducts must be used within an ProductProvider");
    }

    return context;
};

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const createProduct = async (product) => {
        const res = await createProductRequest(product);
        return console.log(res);
    };

    return (
        <ProductContext.Provider value={{ products, createProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
