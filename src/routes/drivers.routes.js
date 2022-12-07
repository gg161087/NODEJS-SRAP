import { Router } from 'express';
import {getDrivers, getDriver , createDriver, updateDriver, deleteDriver} from '../controllers/drivers.controller.js'

const router = Router();

router.get('/', getDrivers);
router.get('/:id', getDriver);
router.post('/', createDriver);
router.put('/:id', updateDriver);
router.delete('/:id', deleteDriver);

export default router;