const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('short'));
app.use(express.json());

app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


const pokemonResource = require('./resources/EmailSenderResource');
app.use(pokemonResource);


const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Email Sender'));

app.listen(port, () => console.log(`Listening on ${port}`));

