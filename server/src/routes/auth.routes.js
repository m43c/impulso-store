import { Router } from "express";
import {
    signup,
    signin,
    logout,
    profile,
} from "../controllers/auth.controler.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);

export default router;
