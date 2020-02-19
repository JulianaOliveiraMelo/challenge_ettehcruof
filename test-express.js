const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => response.send('Hello World!'));

app.get('/test', (request, response) => response.send('Test ?'));

app.get('/zenith', (request, response) => response.send('Une promo au top'));

app.get('/express', (request, response) => response.send('C\'est la vie !'));

app.get('/node', (request, response) => response.send('Trop cool'));

app.get('/truc', (request, response) => response.send('le chat de Maude'));

app.get('/jean', (request, response) => response.send('pëûx plus'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));