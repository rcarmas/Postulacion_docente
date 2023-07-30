// Archivo: form_validation.js

// Función para mostrar una alerta de validación
function showAlert(input, message) {
    var div = input.nextElementSibling;
    if (!div || div.className !== 'alert') {
      div = document.createElement('div');
      div.className = 'alert';
      input.parentNode.appendChild(div);
    }
    div.innerHTML = message;
  }
  
  // Función para ocultar una alerta de validación
  function hideAlert(input) {
    var div = input.nextElementSibling;
    if (div && div.className === 'alert') {
      input.parentNode.removeChild(div);
    }
  }
  
  // Función para realizar la validación en tiempo real
  function validateInput(input, pattern, errorMessage) {
    if (input.value !== '' && !input.value.match(pattern)) {
      showAlert(input, errorMessage);
    } else {
      hideAlert(input);
    }
  }
  
  // Función para validar el formulario completo
  function validateForm() {
    // Obtener los elementos del formulario
    var tipoIdentificacion = document.getElementById("tipo_identificacion");
    var id = document.getElementById("id");
    var nombre = document.getElementById("nombre");
    var provincia = document.getElementById("provincia");
    var email = document.getElementById("clase");
    var contrasena = document.getElementById("sector");
    var confirmarContrasena = document.getElementById("mes");
  
    // Validar los campos individualmente en tiempo real
    validateInput(id, /^\d{10}$/, "El No. de Identificación debe contener 10 digitos");
    validateInput(nombre, /^[A-Z][a-z]*$/, "El Nombre debe empezar con mayúscula");
    validateInput(provincia, /^[A-Z][a-z]*$/, "El Apellido Paterno debe empezar con mayúscula");
    validateInput(email, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Ingrese un Email válido");
    validateInput(contrasena, /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "La Contraseña debe tener mínimo 8 caracteres con al menos una mayúscula, un número y un caracter especial");
  
    // Validar que las contraseñas coincidan
    if (contrasena.value !== confirmarContrasena.value) {
      showAlert(confirmarContrasena, "La Confirmación de Contraseña no coincide");
    } else {
      hideAlert(confirmarContrasena);
    }
  
    // Determinar si el formulario es válido
    return !document.querySelectorAll('.alert').length;
  }
  
  // Obtener los elementos del formulario
  var form = document.querySelector('form');
  var inputs = form.querySelectorAll('input');
  
  // Asociar evento oninput a los campos del formulario
  inputs.forEach(function(input) {
    input.addEventListener('input', function() {
      validateInput(input, input.pattern, input.title);
    });
  });
  