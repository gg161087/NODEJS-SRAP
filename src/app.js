import express from 'express';
import doctorsRoutes from './routes/doctors.routes.js';
import patientsRoutes from './routes/patients.routes.js';

const app = express();

app.use(express.json());
app.use('/api', doctorsRoutes);
app.use('/api', patientsRoutes);

export default app;