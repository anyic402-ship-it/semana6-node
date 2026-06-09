const express = require('express');
const app = express();

app.use(express.json());

// Ruta para recibir datos básicos
app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre, maria isabel castro
  
    mensaje: mensaje
  });

});

// Ruta para registrar una incidencia comunitaria
app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });

});

// Servidor en escucha
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
