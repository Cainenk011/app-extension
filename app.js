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
const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});