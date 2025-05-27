const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Jenkins!');
});

app.listen(8081,'0.0.0.0', () => {
    console.log('Server is running on port 8081');
});

