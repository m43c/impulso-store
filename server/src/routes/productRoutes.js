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
router.get("/products", readProducts);
router.get("/products/:id", readProduct);
router.put("/products/:id", validateToken, updateProduct);
router.delete("/products/:id", validateToken, deleteProduct);

export default router;
