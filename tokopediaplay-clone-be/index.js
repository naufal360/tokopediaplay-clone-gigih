import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import videoRouter from './routes/Video.js';
import commentRouter from './routes/Comment.js';
import productRouter from './routes/Product.js';
import mongodbConn from './config/Mongodb.js';

// config dotenv
dotenv.config();

const start = () => {
    const app = express();

    // env var
    const mongoHost = process.env.MONGODB_HOST;

    // config mongodb
    mongodbConn(mongoHost);

    // config express json
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    // cors
    app.use(cors());

    // config route
    app.use(videoRouter);
    app.use(commentRouter);
    app.use(productRouter);

    const port = process.env.PORT || 3000;

    // run server
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
};

start();