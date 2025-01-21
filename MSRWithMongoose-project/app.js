import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB  from './db.js';
import userRouter from './routes/User.js';
import productRouter from './routes/product.js';

dotenv.config();
const app = express();
app.use(express.json());

// Enable CORS
app.use(cors());

connectDB();

app.get('/', (req, res) => {
    res.send('Welcome to the Users and Products API!');
});

app.use('/users', userRouter);
app.use('/products', productRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});