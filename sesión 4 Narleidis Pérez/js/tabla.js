// Seleccionar todos los botones de compra
const botones = document.querySelectorAll('button');

// Agregar un evento de click a cada botón
botones.forEach(button => {
    button.addEventListener('click', function() {
        // Cambiar el color de la fila cuando se hace clic en comprar
        this.parentElement.parentElement.classList.add('comprado');
        // Opcional: Desactivar el botón después de hacer clic
        this.disabled = true;
        this.textContent = 'Comprado';
    });
});
