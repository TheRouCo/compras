const knex = require('../db/config.js');

const hacerConsulta = (req,res) => {
    console.log(`CONSULTA EJECUTADA EN CONTROLLADOR--> CONSULTA BBDD `);
    knex.select("*").from('compras')
    .then((response) => {
        res.render('consulta',{  
            compraNum: JSON.stringify(response[20].solCompraNum),
            solicit: JSON.stringify(response[20].solicitante),
            cencost: JSON.stringify(response[20].centrocosto),
            proveedor: JSON.stringify(response[20].provedor),
            producserv: JSON.stringify(response[20].prodServ),
            price: JSON.stringify(response[20].precio),        
        });

    })
    .catch(error => {
        console.log(error);
    });
}

module.exports = {
    hacerConsulta
}

/*
.then((rows) =>{
    for (row of rows) {
        console.log(`${row['compraID']} ${row['solCompraNum']} ${row['solicitante']} ${row['centrocosto']} ${row['provedor']} ${row['prodServ']} ${row['precio']}`);
        //console.log(result.render);
    }
*/