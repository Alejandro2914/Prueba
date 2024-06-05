const express = require('express');
const router = express.Router();
const Producto = require('../Modelo/Producto');

let productosa = [];

// Crear un nuevo producto
router.post('/', (req, res) => {
  const { id, name, precio } = req.body;
  const produ = new Producto(id, name, precio);
  productosa.push(produ);
  res.status(201).send(produ);
});

// Obtener todos los ítems
router.get('/', (req, res) => {
  res.send(productosa);
});

module.exports = router;