const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = '84e6bbee44f22595c682285a07dce3d9';

app.use(express.json());
app.use(express.static('public'));

app.get('/api/phone', async (req, res) => {
    const phoneNumber = req.query.number;
    const apiUrl = `https://apilayer.com/api/validate?access_key=${API_KEY}&number=${phoneNumber}`;

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al hacer la solicitud a la API' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
