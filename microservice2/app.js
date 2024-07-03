const express = require('express');
const app = express();
const port = 3001;

app.get('/api/info', (req, res) => {
    res.json({ message: 'Hello from Microservice 2' });
});

app.listen(port, () => {
    console.log(`Microservice 2 listening at http://localhost:${port}`);
});
