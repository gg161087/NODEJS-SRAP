import { Router } from 'express';

const router = Router();

router.get('/patients');
router.get('/patients/:id');
router.post('/patients');
router.put('/patients/:id');
router.delete('/patients/:id');

export default router;