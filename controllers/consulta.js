const knex = require('../db/config.js');

const hacerConsulta = (req,res) => {
    console.log(`CONSULTA EJECUTADA EN CONTROLLADOR--> CONSULTA BBDD `);
    knex //ESTOY HACIENDO ALGO MAL
    .select("*")
    .from('compras')
    .then((response) => {
        for(row of response){
            console.log(`${row['compraID']}`);
        }
        res.render('consulta',{ 
        resultado: response[0],
                
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