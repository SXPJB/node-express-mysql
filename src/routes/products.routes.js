import {Router} from 'express'
import {findAllProducts,insert,delete_product,update} from '../controllers/products.controller'

const router = Router()

router.get("/findAllProducts",findAllProducts)
router.post("/insert",insert)
router.get("/delete",delete_product)
router.post("/update",update)

export default router
