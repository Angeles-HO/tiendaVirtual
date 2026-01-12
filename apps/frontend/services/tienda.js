import { Card } from '../components/card.ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const productosContainer = document.querySelector('.products-cont');

  fetch('/api/products')
    .then((res) => res.json())
    .then((data) => {
      const items = data.products || [];

      items.forEach((item) => {
        const cardHtml = Card({
          name: item.name,
          description: item.description,
          precio: item.precio,
        });

        productosContainer.insertAdjacentHTML('beforeend', cardHtml);
      });
    })
    .catch((err) => {
      console.error('Error cargando productos', err);
    });
});
