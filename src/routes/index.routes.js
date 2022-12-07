import { Router } from 'express';
import carsRoutes from './cars.routes.js'
import driversRoutes from './drivers.routes.js'

export const indexRouter = () => {

    const router = Router();

    router.use('/cars', carsRoutes);
    router.use('/drivers', driversRoutes);
    return router

}