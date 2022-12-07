import { Router } from 'express';
import {getCars, getCar , createCar, updateCar, deleteCar, getCarDrivers} from '../controllers/Cars.controller.js'

const router = Router();

router.get('/', getCars);
router.get('/:id', getCar);
router.post('/', createCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

router.get('/:id/drivers', getCarDrivers);

export default router;