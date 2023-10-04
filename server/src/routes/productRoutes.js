import { Router } from "express";
import { validateToken } from "../middlewares/tokenValidation.js";
import {
    createProduct,
    readProducts,
    readProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productController.js";

const router = Router();

router.post("/products", validateToken, createProduct);
router.get("/products", validateToken, readProducts);
router.get("/products/:id", validateToken, readProduct);
router.put("/products/:id", validateToken, updateProduct);
router.delete("/products/:id", validateToken, deleteProduct);

export default router;
