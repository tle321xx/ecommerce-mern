import productModel from "../models/productModel"
import fs from 'fs'

export const createProductController = async (req,res) => {
    try {
        const {name,slug,description,price,category,quantity,shipping} = req.fields
        const {photo} = req.files
        // validation
        switch(true){
            case !name: throw new Error('Name is required')
            case !slug: throw new Error('slug is required')
            case !description: throw new Error('description is required')
            case !price: throw new Error('price is required')
            case !category: throw new Error('category is required')
            case !quantity: throw new Error('quantity is required')
            case photo && photo.size > 1000000 : throw new Error('photo is required and should be less than 1mb')
        }
        const products = new productModel({})
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in createProductController'
        })
    }
}

export const updateProductController = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in updateProductController'
        })
    }
}

export const productController = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in productController list'
        })
    }
}

export const singleProductController = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in singleProductController'
        })
    }
}

export const deleteProductController = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in deleteProductController'
        })
    }
}
