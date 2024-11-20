const express = require('express');
const app = express();
const path = require('path');

//se configura EJS como motor de templates

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//configuramos los archivos estáticos

app.use(express.static(path.join(__dirname, 'public')));

//se añaden las rutas principales

const indexRouter = require('./routes/Routes_index');
app.use('/', indexRouter);


//Configuramos el servidor

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

