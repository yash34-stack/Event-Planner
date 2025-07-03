import express from "express";
import { Register,Login,Logout} from "../controllers/authController.js";
import { sample,sample1,sample2 } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register",sample,Register);
router.post("/login",sample,sample1,Login);
router.post("/logout",sample,sample1,sample2,Logout);

export default router;