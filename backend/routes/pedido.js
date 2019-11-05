const pedidoRoutes =  (app, fs) => {
    const dataPath =  './data/pedido.json';

    // ler files .json
    app.get('/pedido', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if(err) {
                throw err;
            }

            res.send(JSON.parse(data));
        })
    })
}

module.exports = pedidoRoutes;