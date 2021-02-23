import 'reflect-metadata';
import "./database";
import express, { response } from 'express';
import { router } from './routes';


const app = express();

app
  .use(express.json())
  .use(router);

app.listen(3333, () => console.log("Server is running!"));