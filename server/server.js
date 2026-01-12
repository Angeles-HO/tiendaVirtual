import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import fs from 'fs/promises';

const app = express();
const PORT = 1337;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../apps/frontend/pages/index.html'));
});

app.use(
  '/services',
  express.static(path.join(__dirname, '../apps/frontend/services'))
);
app.use(
  '/styles',
  express.static(path.join(__dirname, '../apps/frontend/styles'))
);
app.use(
  '/components',
  express.static(path.join(__dirname, '../apps/frontend/components'))
);

// Sacar y cambiar por una bbdd luego

const jsonText = await fs.readFile(
  path.join(__dirname, '../database/dump/dump.json'),
  'utf-8'
);

const productos = JSON.parse(jsonText);

app.get('/api/products', (req, res) => {
  res.json(productos);
});

/* 
// Usar cuando se tenga una bbdd
import { tiendaController } from '../apps/backend/controllers/tienda.controller.js';
app.get('/api/tienda/products', tiendaController.getProducts); 
*/

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
