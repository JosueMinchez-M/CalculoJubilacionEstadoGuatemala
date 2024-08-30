// Selecciona los elementos por su ID
const fechaNacimientoInput = document.getElementById('fechaNacimiento');
const edadInput = document.getElementById('edad');

// Añade un evento al cambiar la fecha de nacimiento
fechaNacimientoInput.addEventListener('change', function() {
    const fechaNacimiento = new Date(this.value);
    const hoy = new Date();
    
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    // Si no ha cumplido años este año, resta 1 a la edad
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    
    // Rellena el campo de edad
    edadInput.value = edad;
});
