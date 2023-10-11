import { createContext, useContext, useState } from "react";
import {
    createProductRequest,
    readProductsRequest,
    readProductRequest,
    deleteProductRequest,
    updateProductRequest,
} from "../api/products";

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

    const readProduct = async (id) => {
        try {
            const res = await readProductRequest(id);
            return res.data;
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const deleteProduct = async (id) => {
        try {
            const res = await deleteProductRequest(id);

            if (res.status === 200)
                setProducts(products.filter((product) => product._id !== id));
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const updateProduct = async (id, product) => {
        try {
            await updateProductRequest(id, product);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return (
        <ProductContext.Provider
            value={{
                createProduct,
                readProducts,
                readProduct,
                products,
                deleteProduct,
                updateProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
