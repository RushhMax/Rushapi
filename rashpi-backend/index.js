// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Para leer JSON en las peticiones

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor Express funcionando 🚀');
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
