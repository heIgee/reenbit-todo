import express from 'express';
import {connectMongo} from './config/mongo.config.js';

const app = express();

connectMongo();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is up and running',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
