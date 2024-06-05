// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

// Configurar middlewares
app.use(bodyParser.json());
app.use(cors());

// Servir archivos estáticos desde el directorio 'cliente'
app.use(express.static(path.join(__dirname, '../Cliente')));

// Importar las rutas
app.use('/productos', require('./Rutas/productos'));

// Ruta de fallback para servir index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Cliente', 'index.html'));
});

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto:${port}");
});