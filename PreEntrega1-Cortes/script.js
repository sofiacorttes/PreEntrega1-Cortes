// Define una variable para almacenar los productos en el carrito
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito en la página
function actualizarCarrito() {
    const carritoContainer = document.querySelector(".carrito ul");
    carritoContainer.innerHTML = ""; // Limpiar el contenido anterior

    let total = 0;

    // Recorrer los productos en el carrito
    carrito.forEach((producto) => {
        total += producto.precio;
        const listItem = document.createElement("li");
        listItem.textContent = producto.nombre + " - Precio: $" + producto.precio.toFixed(2);
        carritoContainer.appendChild(listItem);
    });

    // Actualizar el total en el carrito
    const totalElement = document.querySelector(".carrito p");
    totalElement.textContent = "Total: $" + total.toFixed(2);
}

// Ejemplo de productos (debes adaptar esto a tus propios productos)
const producto1 = { nombre: "Producto 1", precio: 19.99 };
const producto2 = { nombre: "Producto 2", precio: 24.99 };

// Agregar eventos de clic a los botones "Agregar al carrito"
document.querySelectorAll(".producto button").forEach((boton, indice) => {
    boton.addEventListener("click", () => {
        agregarAlCarrito(indice === 0 ? producto1 : producto2);
    });
});

// Inicializar el carrito
actualizarCarrito();
