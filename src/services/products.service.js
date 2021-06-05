import {getConnetion} from '../database/database'

export const getAllProductsService = async () => {
    let productsList = null
    try{
        const conn = await getConnetion()
        productsList = await conn.query('SELECT * FROM products')
    }catch(e){
        throw e.message
    }
    return productsList
}