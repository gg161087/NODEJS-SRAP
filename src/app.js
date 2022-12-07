import express from 'express';
import carsRoutes from './routes/cars.routes.js';
import driversRoutes from './routes/drivers.routes.js';

const app = express();

app.use(express.json());
app.use('/api', carsRoutes);
app.use('/api', driversRoutes);

export default app;