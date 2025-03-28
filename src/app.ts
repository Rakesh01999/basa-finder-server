import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();

// parser
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: [
    'http://localhost:5173',
    // 'https://basa-finder-client.vercel.app',
    'http://localhost:3000', 
    'http://basa-finder-next.vercel.app'
  ],
  credentials: true
}));


// application routes

app.use('/api/v1', router);


app.get('/', (req: Request, res: Response) => {
  res.send(' 🏡 Basa Finding . . . !');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
