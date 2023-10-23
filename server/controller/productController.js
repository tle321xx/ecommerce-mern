import productModel from "../models/productModel.js";
import fs from "fs";
import slugify from "slugify";

export const createProductController = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    // validation
    switch (true) {
      case !name:
        res.status(500).send({ error: "Name is required" });
      case !description:
        res.status(500).send({ error: "description is required" });
      case !price:
        res.status(500).send({ error: "price is required" });
      case !category:
        res.status(500).send({ error: "category is required" });
      case !quantity:
        res.status(500).send({ error: "quantity is required" });
      case photo && photo.size > 1000000:
        res
          .status(500)
          .send({ error: "Photo is Required and should be less than 1 mb" });
    }
    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Successfully created a Product",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in createProductController",
    });
  }
};

export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      total: products.length,
      message: "All products",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getProductController",
    });
  }
};

export const singleProductController = async (req, res) => {
  try {
    const product = await productModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "single product",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in singleProductController",
    });
  }
};

export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("photo");
    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.pid).select("-photo")
    res.status(200).send({
        success: true,
        message: 'Deleted Successfully'
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in deleteProductController",
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const { name, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    // validation
    switch (true) {
      case !name:
        res.status(500).send({ error: "Name is required" });
      case !description:
        res.status(500).send({ error: "description is required" });
      case !price:
        res.status(500).send({ error: "price is required" });
      case !category:
        res.status(500).send({ error: "category is required" });
      case !quantity:
        res.status(500).send({ error: "quantity is required" });
      case photo && photo.size > 1000000:
        res
          .status(500)
          .send({ error: "Photo is Required and should be less than 1 mb" });
    }
    const products = await productModel.findByIdAndUpdate(req.params.pid,
        {...req.fields, slug:slugify(name)}, {new:true})
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Successfully updated a Product",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in updateProductController",
    });
  }
};
