export function Card({ name, description, precio }) {
  return `
    <div class="card">
      <h3>${name}</h3>
      <p>${description}</p>
      <span class="price">$${precio}</span>
      <button class="add-to-cart" onclick="agregar('${name}', ${precio})">Agregar</button>
    </div>
  `;
}
