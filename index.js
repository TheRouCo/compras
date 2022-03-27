//Configuración de las librerías que utilizaremos
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

//Configuración de los Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

//Configuración del Motor de Plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));


//Configuración del puerto del Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
app.on('error', (err) => {
    console.log(`Servidor corriendo en el puerto ${err}`);
});

//Configurar rutas para páginas estaticas
app.get('/pages/autorizaciones.html', function (req, res,html) {
    res.sendFile(path.join(__dirname+'/pages/autorizaciones.html'));
});
app.get('/pages/compra.html', function (req, res,html) {
    res.sendFile(path.join(__dirname+'/pages/compra.html'));
});
app.get('/pages/consulta.html', function (req, res,html) {
    res.sendFile(path.join(__dirname+'/pages/consulta.html'));
});
app.get('/pages/presupuesto.html', function (req, res,html) {
    res.sendFile(path.join(__dirname+'/pages/presupuesto.html'));
});
app.get('/pages/compraOK.html', function (req, res,html) {
    res.sendFile(path.join(__dirname+'/pages/compraOK.html'));
});

//Configurar las Rutas de mi aplicación - API's

app.use('/api/compra', require('./routes/compra'));

app.use('/api/consulta', require('./routes/consulta'));

/*
app.post('/submit-form', (req, res) => {
    const username = req.body.username
    
    res.end()
})
*/
