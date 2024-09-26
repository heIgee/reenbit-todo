import express from 'express';
import {connectMongo} from './config/mongo.config.js';
import {tasksRouter} from './routes/tasks.router.js';
import {errorHandler} from './middleware/error-handler.middleware.js';

const app = express();

connectMongo();

app.use(express.json());

app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is up and running',
    timestamp: new Date().toISOString()
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
