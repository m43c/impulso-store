import { Router } from "express";
import { validateToken } from "../middlewares/tokenValidation.js";
import { validateRole } from "../middlewares/roleValidation.js";
import {
    createProduct,
    readProducts,
    readProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productController.js";

const router = Router();

router.post("/products", validateToken, validateRole, createProduct);
router.get("/products", readProducts);
router.get("/products/:id", readProduct);
router.put("/products/:id", validateToken, validateRole, updateProduct);
router.delete("/products/:id", validateToken, validateRole, deleteProduct);

export default router;
