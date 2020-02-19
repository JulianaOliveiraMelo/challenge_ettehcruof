// maintenant qu'on a pretty, c'est quand même dommage de pas l'utiliser ;-)
// whaaaat ? on peut require un module dans un module ??
// beh, oui :-) vous croyez qu'il a fait comment, le développeur de pretty, pour dépendre d'autres modules dans son module ?
const pretty = require('pretty');

module.exports = {
    css: `
    body {
        background-color: rebeccapurple;
        color: white;
    }

    h1 {
        text-align: center;
        border: 2px dotted green;
    }

    #responses {
        border: 1px solid lightgrey;
        padding: 1em;
    }

    a.btn {
        border: 1px solid darkgrey;
        background-color: lightgrey;
        color: black;
        padding: .3em .5em;
        border-radius: .2em;
        text-decoration: none;
        display: inline-block;
    }`,
    toHtml: (message, restart = false) => {
        let userInterface = `<!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Ettehcruof</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <h1>Ettehcruof</h1>
            <p>${message}</p>
            <section id="responses">`;
        if (restart) {
            userInterface += '<a class="btn" href="/">Nouvelle partie</a>';
        } else {
            userInterface += `<a class="btn" href="/moins">C'est moins</a>
            <a class="btn" href="/bravo">C'est ça</a>
            <a class="btn" href="/plus">C'est plus</a>`;
        }
    
        userInterface += `</section>
            <script type="text/javascript" src="/front.js"></script>
        </body>
        </html>`;
    
        // pour éviter de modifier chaque appel à toHtml, autant modifier directement ce que retourne cette méthode
        // regardez le code source des vos pages maintenant ;-)
        return pretty(userInterface, {ocd: true});
    },
    js: `console.log('Coucou côté client');`
};