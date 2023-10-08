import { createContext, useContext, useState } from "react";
import { createProductRequest, readProductsRequest } from "../api/products";

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
        try {
            await createProductRequest(product);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const readProducts = async () => {
        try {
            const res = await readProductsRequest();
            setProducts(res.data);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return (
        <ProductContext.Provider
            value={{ createProduct, readProducts, products }}
        >
            {children}
        </ProductContext.Provider>
    );
};
