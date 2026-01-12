// 1. INICIALIZACIÓN: Cargar el carrito guardado al abrir la página
// Usamos 'let' para poder vaciarlo después de la compra
let carrito = JSON.parse(localStorage.getItem('mi_carrito')) || [];
let total = 0;

// Llamamos a la función para que se muestren los productos si ya había algo guardado
renderizarCarrito();

/**
 * Agrega un producto al carrito
 * @param {string} nombre - Nombre del producto
 * @param {number} precio - Precio del producto
 */
function agregar(nombre, precio) {
    // Guardamos como objeto para manejar mejor los datos
    carrito.push({ nombre, precio });
    
    // Guardamos en la memoria del navegador
    localStorage.setItem('mi_carrito', JSON.stringify(carrito));
    
    // Actualizamos la lista en el HTML
    renderizarCarrito();
}

/**
 * Dibuja el carrito en el HTML y calcula el total
 */
function renderizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const totalTxt = document.getElementById('total');

    // Verificamos que los elementos existan en el HTML para evitar errores
    if (!lista || !totalTxt) return;

    lista.innerHTML = ''; // Limpiamos la lista antes de volver a llenarla
    total = 0;

    carrito.forEach((p, index) => {
        const item = document.createElement('li');
        item.textContent = `${p.nombre} - $${p.precio}`;
        
        // (Opcional) Botón para eliminar un solo producto
        const btnBorrar = document.createElement('button');
        btnBorrar.innerHTML = " 🗑️";
        btnBorrar.style.border = "none";
        btnBorrar.style.background = "none";
        btnBorrar.style.cursor = "pointer";
        btnBorrar.onclick = () => eliminarDelCarrito(index);
        
        item.appendChild(btnBorrar);
        lista.appendChild(item);
        
        total += p.precio;
    });

    // Actualizamos el número del total en la pantalla
    totalTxt.innerText = total;
}

/**
 * Elimina un producto específico por su índice
 */
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('mi_carrito', JSON.stringify(carrito));
    renderizarCarrito();
}

/**
 * Envía el pedido a WhatsApp y limpia la tienda
 */
function enviarWhatsApp() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    const telefono = "5491158360957"; // RECUERDA: Tu número sin el símbolo +
    let mensaje = "¡Hola! Quisiera realizar el siguiente pedido:\n\n";
    
    carrito.forEach((p, i) => {
        mensaje += `${i + 1}. ${p.nombre} ($${p.precio})\n`;
    });
    
    mensaje += `\n*Total a pagar: $${total}*`;
    
    // Creamos la URL codificada correctamente
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    // 1. Abrimos la pestaña de WhatsApp
    window.open(url, '_blank');

    // 2. LIMPIEZA TOTAL
    carrito = []; // Vaciamos el array
    total = 0;    // Reiniciamos el contador
    localStorage.removeItem('mi_carrito'); // Borramos la memoria
    
    // 3. Actualizamos la vista para que el cliente vea el carrito vacío
    renderizarCarrito();

    alert("¡Pedido enviado! El carrito se ha limpiado correctamente.");
}