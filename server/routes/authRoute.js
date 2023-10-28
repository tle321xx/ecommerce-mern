import express from "express";
import {
  testController,
  registerController,
  loginController,
  forgotPasswordController,
  updateProfileController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

// router obj
const router = express.Router();

// routing
router.post("/register", registerController);
router.post("/login", loginController);

// forgot password
router.post("/forgot-password", forgotPasswordController);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);

// protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

router.put("/profile", requireSignIn, updateProfileController);

export default router;
