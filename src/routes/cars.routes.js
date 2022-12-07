import { Router } from 'express';
import {getCars, getCar , createCar, updateCar, deleteCar, getCarDrivers} from '../controllers/Cars.controller.js'

const router = Router();

router.get('/cars', getCars);
router.get('/cars/:id', getCar);
router.post('/cars', createCar);
router.put('/cars/:id', updateCar);
router.delete('/cars/:id', deleteCar);

router.get('/cars/:id/drivers', getCarDrivers);

export default router;