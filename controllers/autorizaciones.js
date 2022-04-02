const knex = require('../db/config.js');

const autorizPendiente = (req,res) => {
    knex.select("*").from('compras').where('autorizado', 0)
    .then((response) => {
        res.render('autorizaciones',{  
           respuesta: response   
        });

    })
    .catch(error => {
        console.log(error);
    });
}

module.exports = {
    autorizPendiente
}