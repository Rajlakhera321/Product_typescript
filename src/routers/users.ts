import express from 'express';
import { addProduct, productDetailById, productsDetail, updateProduct, deleteProduct } from '../controllers/users';
const router = express.Router();
import { func } from '../middleware/middleFunc';

router.post('/add', func, addProduct);

router.get('/product/:id', func, productDetailById);

router.get('/', func, productsDetail);

router.delete('/delete/:id', func, deleteProduct)

router.get('/update/:id', func, updateProduct)

export { router };