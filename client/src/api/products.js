import axios from "./axios";

export const createProductRequest = (product) =>
    axios.post("/add-product", product);

export const readProductsRequest = () => axios.get("/products");

export const readProductRequest = (id) => axios.get(`/product/${id}`);

export const updateProductRequest = (id, product) =>
    axios.put(`/product/${id}`, product);

export const deleteProductRequest = (id) => axios.delete(`/product/${id}`);
