import { Router } from "express";
import * as CompraController from '../controllers/compraController';
const router = Router();


router.get('/',CompraController.compra);


export default router;