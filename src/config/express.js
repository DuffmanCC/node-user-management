import express from 'express';
import userRouter from '#Routes/userRouter.js';

const expressApp = express();

// Middlewares
expressApp.use(express.json());

// Routes
expressApp.use('/user', userRouter);

export default expressApp;
