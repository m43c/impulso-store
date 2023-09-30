import { Router } from "express";
import {
    signup,
    signin,
    logout,
    profile,
} from "../controllers/authController.js";
import { validateToken } from "../middlewares/tokenValidation.js";
import { signupSchema, signinSchema } from "../schemas/authSchema.js";
import { validateSchema } from "../middlewares/schemaValidation.js";

const router = Router();

router.post("/signup", validateSchema(signupSchema), signup);
router.post("/signin", validateSchema(signinSchema), signin);
router.post("/logout", logout);
router.get("/profile", validateToken, profile);

export default router;
