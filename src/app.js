// src/app.js
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/dbConfig.js';

dotenv.config();
const app = express();
app.use(express.json());


// Kết nối đến PostgreSQL
connectDB();

// app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


export default app;




