import { Router } from 'express';
import {getDoctors, getDoctor , createDoctor, updateDoctor, deleteDoctor} from '../controllers/doctors.controller.js'

const router = Router();

router.get('/doctors', getDoctors);
router.get('/doctors/:id', getDoctor);
router.post('/doctors', createDoctor);
router.put('/doctors/:id', updateDoctor);
router.delete('/doctors/:id', deleteDoctor);

export default router;