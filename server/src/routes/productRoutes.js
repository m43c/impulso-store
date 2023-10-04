import { Router } from "express";
import { validateToken } from "../middlewares/tokenValidation.js";

const router = Router();

router.post("/products", validateToken);
router.get("/products", validateToken);
router.get("/products/:id", validateToken);
router.put("/products/:id", validateToken);
router.delete("/products:id", validateToken);

export default router;
