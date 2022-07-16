import express from 'express';
import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { createConnection } from 'typeorm';

import { apiRouter } from './routes';
import {config} from "./configs";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(apiRouter);

app.listen(config.PORT, async () => {
    console.log('Server has started on Port: ', config.PORT);
    try {
        // const connection = await createConnection();
        if (1) {
            console.log('DATABASE Connect');

        }
    } catch (err) {
        if (err) {
            console.log(err);
        }
    }
});
