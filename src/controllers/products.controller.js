import {getAllProductsService,insertProduct,updateProduct,deleteProduct} from '../services/products.service'

export const findAllProducts = async (req,res) => {
    let response = null
    let status = null
    try{
        const productsList = await getAllProductsService()
        response = {
            success:true,
            data:productsList,
            message:"List products"
        }
        status = 200 
    }catch(e){
        response = {
            success:false,
            data:null,
            message:"Not found List products"
        }
        status = 400
    }
    res.status(status)
    res.json(response)
}

export const insert = async (req,res) => {
    let response = null
    let status = null

    try{
        const product = req.body 
        const id = await insertProduct(product)
        response = {
            success:true,
            data:id,
            message:`New Product insert ${id}`
        }
        status = 201
    }catch(e){
        response = {
            success:true,
            data:null,
            message:"Error insert product",
            exception: e
        }
        status = 400
    } 
    res.status(status)
    res.json(response)
}

export const update = async (req,res) => {
    let response = null
    let status = null
    try{
        const {id} = req.query
        const product = req.body
        await updateProduct(product,id)
        response = {
            success:true,
            data:null,
            message:`Product update`
        }
        status = 200
    }catch (e) {
        response = {
            success:true,
            data:null,
            message:"Error update product",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(response)
}

export const delete_product = async (req,res) => {
    let response = null
    let status = null

    try{
        const {id}=req.query
        await deleteProduct(id)        
        response = {
            success:true,
            data:null,
            message:`Product Delete`
        }
        status = 200
    }catch (e) {
        response = {
            success:true,
            data:null,
            message:"Error delete product",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(response)
}