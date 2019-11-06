const express = require('express');
const cors = require('cors');
const fs = require('fs');
const port = 6060;

const order = () => {
  let jsonOrder = fs.readFileSync('./data/pedido.json', 'utf8');

  jsonOrder = JSON.parse(jsonOrder);

  return jsonOrder;
};

const app = express();

app.use(cors());

app.get('/order', (req, res) => {
  res.status(200).json(order());

  return true;
});

app.listen(port);
console.log(`Server running at localhost:${port}/order`);