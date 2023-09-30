import { Router } from "express";
import {
    signup,
    signin,
    logout,
    profile,
} from "../controllers/auth.controler.js";
import { authRequired } from "../middlewares/validateToken.js";
import { signupSchema, signinSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.post("/signup", validateSchema(signupSchema), signup);
router.post("/signin", validateSchema(signinSchema), signin);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);

export default router;
