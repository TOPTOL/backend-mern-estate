import express from 'express'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
dotenv.config();
import cors from 'cors';


mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB!');
    }).catch((err) => {
        console.log(err);
    });
    

const app = express();

app.use(cors());
app.use(express.json());

app.use(cookieParser());

app.listen(3500, () => {
    console.log('server is running on port 3500');
    }
);

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});