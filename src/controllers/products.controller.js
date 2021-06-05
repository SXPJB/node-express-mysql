import {getAllProductsService} from '../services/products.service'

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