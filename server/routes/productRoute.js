import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createProductController,
  updateProductController,
  getProductController,
  singleProductController,
  deleteProductController,
  productPhotoController
} from "../controller/productController.js";
import ExpressFormidable from "express-formidable";

const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  ExpressFormidable(),
  createProductController
);

router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    ExpressFormidable(),
    updateProductController
  );

router.get("/get-product", getProductController);

router.get("/get-product/:slug", singleProductController);

router.get("/product-photo/:pid", productPhotoController);

router.delete("/product/:pid", deleteProductController);



export default router;
