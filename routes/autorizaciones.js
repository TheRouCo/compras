/* 
    Responde a la ruta 
    /api/autorizaciones
*/
const { Router } = require('express');
const router = Router();

const {
    autorizPendiente
} = require('../controllers/autorizaciones');

router.get('/', autorizPendiente); //Crea una Orden de Compra

module.exports = router;