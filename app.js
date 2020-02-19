// good bye, module natif
//const http = require('http');

// welcome, express
const express = require('express');
const app = express();

const ettehcruof = require('./modules/ettehcruof');

const router = require('./router');

// parce qu'il faut lancer une première partie au démarrage du serveur
ettehcruof.newGame();

app.use(router);


app.listen(3000, () => console.log('Serveur en écoute sur le port 3000'));