import express from 'express';
import { config } from 'dotenv';
import cors from "cors";
import indexRouter from './routes/index.js';
config();

const server = express();

server.use(express.json());
server.use(cors());
server.set('port', process.env.PORT || 9200);
server.use("/", indexRouter);

export default server;