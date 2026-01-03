import express from 'express';
import connectToDatabase from './Database.js';

const app = express();

const port =  3000;

// Connect to the database
connectToDatabase();

app.get('/', (req, res) => {
  res.send('Hello Aditya!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})