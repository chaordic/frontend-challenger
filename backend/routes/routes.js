// load a routa de pedido
const pedidoRoutes =  require('./pedido')

const appRouter =  (app, fs) => {

    app.get('/', (req, res) => {
        res.send('api running');
    });


    pedidoRoutes(app, fs);
};

module.exports =  appRouter;