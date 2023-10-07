import axios from "./axios";

export const createProductRequest = (product) =>
    axios.post("/products", product);
export const readProductsRequest = () => axios.get("/products");
export const readProductRequest = (id) => axios.get(`/products/${id}`);
export const updateProductRequest = (product) =>
    axios.put(`/products/${product._id}`, product);
export const deleteProductRequest = (id) => axios.delete(`/products/${id}`);
