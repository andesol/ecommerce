const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.static('public'));
app.use(cors());

const baseUrl = 'http://localhost:3001/'

const dummyProducts = [
    {
        id: 1,
        name: 'Coche blanco',
        img: `${baseUrl}/img1.jpg`,
    },
    {
        id: 2,
        name: 'Coche rojo',
        img: `${baseUrl}/img2.jpg`,
    },
    {
        id: 3,
        name: 'Hot wheels',
        img: `${baseUrl}/img3.jpg`,
    }
]
app.get('/', (req, res) => {
    res.json(dummyProducts)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => `Server running in port ${PORT}`);