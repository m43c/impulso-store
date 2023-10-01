import { Router } from "express";
import { signup, signin, logout } from "../controllers/authController.js";
import { signupSchema, signinSchema } from "../schemas/authSchema.js";
import { validateSchema } from "../middlewares/schemaValidation.js";

const router = Router();

router.post("/signup", validateSchema(signupSchema), signup);
router.post("/signin", validateSchema(signinSchema), signin);
router.post("/logout", logout);

export default router;
