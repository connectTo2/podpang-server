import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import userRouter from './router/auth.js';

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors(corsOptions));
app.use(helmet());

app.use('/auth', userRouter);

app.use((req, res) => {
  res.status(404);
});

app.use((error, req, res) => {
  console.error(error);
  res.status(404).send('error');
});
app.listen(8080);
