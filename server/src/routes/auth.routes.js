import { Router } from "express";
import { signup } from "../controllers/auth.controler.js";

const router = Router();

router.post("/signup", signup);

export default router;
