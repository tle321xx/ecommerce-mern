import categoryModels from "../models/categoryModels.js"
import slugify from "slugify"

export const createCategoryController = async(req,res) => {
    try {
        const {name} = req.body
        if(!name){
            return res.status(400).send({message: 'Name is required'})
        }
        const existcategory = await categoryModels.findOne({name})
        if(existcategory){
            return res.status(200).send({
                success: true,
                message: `Category ${name} already exists`
            })
        }
        const category = await new categoryModels({name, slug:slugify(name)}).save()
        res.status(201).send({
            success: true,
            message: 'new category created',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).semd({
            success:false,
            error,
            message:'Error in gategory controller'
        })
    }
}

export const updateCategoryController = async(req,res) => {
    try {
        const {name} = req.body
        const {id} = req.params
        const category = await categoryModels.findByIdAndUpdate(id,{name, slug:slugify(name)},{new:true})
        res.status(200).send({
            success: true,
            message: 'category updated',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in update gategory controller'
        })
    }
}

export const categoryController = async(req,res) => {
    try {
        const category = await categoryModels.find({})
        res.status(200).send({
            success: true,
            message: 'All categories List',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in getting all gategory controller'
        })
    }
}

export const singleCategoryController = async(req,res) => {
    try {
        const category = await categoryModels.findOne({slug:req.params.slug})
        res.status(200).send({
            success: true,
            message: 'Get Single Category Successfully',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in single gategory controller'
        })
    }
}

export const deleteCategoryController = async (req,res) => {
    try {
        const {id} = req.params
        const category = await categoryModels.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: 'delete Category Successfully',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in delete gategory controller'
        })
    }
}

export const productCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    const products = await productModel.find({ category }).populate("category");
    res.status(200).send({
      success: true,
      category,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: "Error While Getting products",
    });
  }
};