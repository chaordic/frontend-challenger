const express = require('express');
const bodyParser =  require('body-parser');

// criar uma instacia do express
const app = express()

// Usamos para servir o nosso arquivo .json
const fils =  require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes =  require('./routes/routes.js')(app, fils);

const server = app.listen(3001, () => {
    console.log('escutando na porta...', server.address().port);
})