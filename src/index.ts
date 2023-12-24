import express, { Request, Response } from "express";
import { router } from './routers/users';
import connects from './config/db'
import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });
const app = express();
const port = process.env.PORT;

connects();

app.use(express.json())
app.use('/home', router);

app.listen(port, (): void => console.log(`This index is running on port number: ${port}`))