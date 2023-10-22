import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createProductController,
  updateProductController,
  productController,
  singleProductController,
  deleteProductController,
} from "../controller/productController.js";
import ExpressFormidable from "express-formidable";

const router = express.Router();

router.post(
  "/create-product",
  isAdmin,
  requireSignIn,
  ExpressFormidable(),
  createProductController
);

router.put("/update-product", updateProductController);

router.get("/all-product", productController);

router.get("/single-product", singleProductController);

router.delete("/delete-product", deleteProductController);

export default router;
