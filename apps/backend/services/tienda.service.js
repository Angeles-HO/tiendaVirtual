import { db } from '../database/db.js';

export const getAllProducts = async () => {
  const productos = await db.query('SELECT * FROM productos');
  return productos.rows;
};
