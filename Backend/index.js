import express from 'express';
import connectToDatabase from './Database.js';
import authRoutes from './Routes/auth.js'
import notesRoute from './Routes/notes.js'

const app = express();

const port =  3000;

// Connect to the database
connectToDatabase();

// Available Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoute);

app.get('/', (req, res) => {
  res.send('Hello Aditya!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})