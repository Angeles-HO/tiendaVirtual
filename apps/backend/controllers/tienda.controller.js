// import { getAllProducts } from '../services/tienda.service.js';

export const tiendaController = {
  getProducts: async (req, res) => {
    try {
      const productos = await getAllProducts();
      res.json(productos);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },
};
