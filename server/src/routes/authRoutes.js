import { Router } from "express";
import {
    signup,
    signin,
    logout,
    profile,
    verifyToken,
} from "../controllers/authController.js";
import { signupSchema, signinSchema } from "../schemas/authSchema.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { validateToken } from "../middlewares/tokenValidation.js";

const router = Router();

router.post("/signup", validateSchema(signupSchema), signup);
router.post("/signin", validateSchema(signinSchema), signin);
router.post("/logout", logout);
router.get("/profile", validateToken, profile);
router.get("/verify", verifyToken);

export default router;
