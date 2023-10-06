import { Router } from "express";
import { validateToken } from "../middlewares/tokenValidation.js";
import { validateRole } from "../middlewares/roleValidation.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { createProductSchema } from "../schemas/productSchema.js";
import {
    createProduct,
    readProducts,
    readProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productController.js";

const router = Router();

router.post(
    "/add-product",
    validateToken,
    validateRole,
    validateSchema(createProductSchema),
    createProduct
);
router.get("/products", readProducts);
router.get("/products/:id", readProduct);
router.put("/products/:id", validateToken, validateRole, updateProduct);
router.delete("/products/:id", validateToken, validateRole, deleteProduct);

export default router;
