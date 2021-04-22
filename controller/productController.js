let visitados = require('../data/datosProductos');

let productController = {
    home: (req, res) => {
        console.log("Entro al home del Product controller");
        res.redirect('/');
    },
    show: (req, res) => {
        console.log("Me seleccionaro: "+req.params.id);
        let product = visitados.find(function (value){
            console.log('Dentro de la función: '+value.id);
            return value.id === req.params.id;
        });

    }
}

module.exports = productController;