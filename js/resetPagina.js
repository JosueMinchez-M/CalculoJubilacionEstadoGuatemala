document.getElementById('resetButton').addEventListener('click', function() {
    // Desplazar hasta la parte superior de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Esperar un momento para que el scroll se complete, luego recargar la página
    setTimeout(function() {
        location.reload(); // Recarga la página
    }, 500); // Ajusta el tiempo si es necesario
});