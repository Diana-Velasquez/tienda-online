window.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario
    var form = document.getElementById('contactForm');

    // Validar el formulario al enviar
    form.addEventListener('submit', function(event) {
        // Obtener los valores de los campos
        var nombre = document.getElementById('nombre').value;
        var correo = document.getElementById('correo').value;
        var sexo = document.querySelector('input[name="sexo"]:checked');
        var estadoCivil = document.getElementById('estadoCivil').value;
        var telefono = document.getElementById('telefono').value;
        var mensaje = document.getElementById('mensaje').value;

        // Realizar validaciones
        var isValid = true;

        if (!nombre || !correo || !sexo || !estadoCivil || !mensaje) {
            isValid = false;
            alert('Por favor, complete todos los campos obligatorios.');
        }

        if (telefono && !validarTelefono(telefono)) {
            isValid = false;
            alert('El número de teléfono no es válido.');
        }

        if (isValid) {
            // Enviar el formulario si es válido
            alert('Formulario enviado con éxito.');
        } else {
            // Cancelar el envío del formulario si no es válido
            event.preventDefault();
        }
    });

    // Función de validación de número de teléfono
    function validarTelefono(telefono) {
        var patronTelefono = /^\d{10}$/;
        return patronTelefono.test(telefono);
    }
});