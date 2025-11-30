import { Router } from "express";
import { validate } from "../middlewares/validation.js";
import { loginSchema, signupSchema } from "../schema/userSchema.js";
import { login, profile, signup } from "../controllers/userController.js";
import { verifyLogin } from "../middlewares/verifyLogin.js";

const router = Router();

router.post("/signup",validate(signupSchema),signup);

router.post("/login",validate(loginSchema),login);

router.get("/dashboard",verifyLogin,profile);

export default router