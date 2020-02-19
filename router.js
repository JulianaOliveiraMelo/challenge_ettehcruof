const express = require('express');
const router = express.Router();

const ettehcruof = require('./modules/ettehcruof');
const ui = require('./modules/ui');

router.get('/', (request, response) => {
    response.send(ui.toHtml(`C'est ${ettehcruof.getProposition()} ?`));
});

router.get('/style.css', (request, response) => {
    response.setHeader("Content-Type", "text/css");
    response.send(ui.css);
});

router.get('/plus', (request, response) => {
    ettehcruof.more();
    response.send(ui.toHtml(`Ok, c'est ${ettehcruof.getProposition()} alors ?`));
});

router.get('/moins', (request, response) => {
    ettehcruof.less();
    response.send(ui.toHtml(`Hmmm, ${ettehcruof.getProposition()} peut-être ?`));
});

router.get('/bravo', (request, response) => {
    response.send(ui.toHtml(`Yeah, j'étais sûr que c'était bien ${ettehcruof.getProposition()}`, true));
    ettehcruof.newGame();
});

router.get('/front.js', (request, response) => {
    response.setHeader('Content-Type', 'text/javascript;charset=utf8');
    response.send(ui.js);
});

// /boundaries/1/110
// /boundaries/2/17
// /boundaries/5/500

router.get('/boundaries/:min/:max', (request, response) => {
    response.redirect('/');
    ettehcruof.setMinimum(parseInt(request.params.min));
    ettehcruof.setMaximum(parseInt(request.params.max));
    ettehcruof.newGame(true);
});

module.exports = router;