import express from 'express';
import productController from '../controllers/productController.js';
const productRouter = express.Router();

// Product routes
productRouter.post('/', productController.createProduct);
productRouter.get('/', productController.getAllproduct);
productRouter.get('/:id', productController.getProductById);
productRouter.put('/:id',productController.updateProductById)
productRouter.get('/name/:name', productController.getProductByname);
productRouter.delete('/:id', productController.deleteProductById);
productRouter.get('/dto', productController.getAllproductDTO);

export default  productRouter;