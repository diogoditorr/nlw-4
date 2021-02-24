import 'reflect-metadata';
import "./database";
import express, { response } from 'express';
import createConnection from './database';
import { router } from './routes';

createConnection();
const app = express();

app
  .use(express.json())
  .use(router);

export { app };