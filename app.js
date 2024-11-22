const express = require('express');
const app = express();
const path = require('path');

// Configuración de EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para manejar archivos estáticos (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const indexRoutes = require('./routes/Routes_index');
app.use('/', indexRoutes);

// Servidor en escucha
app.listen(3100, () => {
  console.log('Servidor corriendo en http://localhost:3100');
});


