const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
    // Appel vers le microservice 2 à l'intérieur du cluster
    // Supposons que l'URL du service interne soit http://microservice2-service:80/api/info
    const axios = require('axios');
    axios.get('http://microservice2-service:80/api/info')
        .then(response => {
            res.json({ message: 'Response from Microservice 2', data: response.data });
        })
        .catch(error => {
            console.error('Error calling Microservice 2:', error);
            res.status(500).json({ error: 'Error calling Microservice 2' });
        });
});

app.listen(port, () => {
    console.log(`Microservice 1 listening at http://localhost:${port}`);
});
