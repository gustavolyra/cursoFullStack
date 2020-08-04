import express from 'express';
import winston from 'winston';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { promises as fs } from 'fs';
import { swaggerDocument } from './docs/doc.js';
import gradesRouter from './router/grades.js';

const { readFile, writeFile } = fs;

global.fileName = 'grades.json';
global.filePath = './json/jsonTeste/';
global.fileJson = global.filePath + global.fileName;

//Winston Configuration

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({ filename: './logs/combined.log' }),
  ],
  format: combine(label({ label: 'grades' }), timestamp(), myFormat),
});

//app Configuration
const app = express();
app.use(express.json());
app.use(cors());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/grades', gradesRouter);

app.listen(3000, async () => {
  try {
    console.log(global.fileJson);
    await readFile(global.fileJson);
    logger.info('api started !');
  } catch (err) {
    logger.error(err);
  }
});
