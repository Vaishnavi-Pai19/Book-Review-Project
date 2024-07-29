import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); 

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));         //Parses incoming requests with JSON payloads
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));   //Parses incoming requests with URL-encoded payloads
app.use(cors());                         // Allows frontend and backend to run on different ports
app.use('/posts', postRoutes);

// Server configuration: Sets it to a default of 5000 if not defined in .env
const PORT = process.env.PORT || 5000;


// Connects to the MongoDB database using the connection string from the environment variable
mongoose.connect(process.env.CONNECTION_URL)
  .then(() => {
    console.log('Connected to MongoDB');

    // Starts the server and ensures it's listening on the specified port
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log('Connection error', error.message));