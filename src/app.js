import express from 'express';
import {indexRouter} from './routes/index.routes.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', indexRouter())

export default app;