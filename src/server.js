import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to Devops course',
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port: ', port);
});
