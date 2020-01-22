const express = require('express');
const cors = require('cors');
const fs = require('fs'); //módulo que permite a leitura do arquivo
const data = './data/pedido.json'; //caminho do arquivo JSON

const list = () => {
    let listdata = fs.readFileSync(data, 'utf8'); // lê o arquivo e retorna 
    listdata = JSON.parse(listdata); // converte o arquivo para JSON
    return listdata;
}

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json(list());
});

app.listen(3333);