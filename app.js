// Aquí puedes agregar cualquier otro código de JavaScript que desees

// Puedes quitar este setTimeout si no deseas mostrar un mensaje después de que se carguen las fotos.
setTimeout(function() {
   // alert('¡Espero que disfrutes de las fotos!');
}, 5000); // Mostrar el mensaje después de 5 segundos

// Añadir esto al archivo app.js

const mensaje = document.getElementById('mensaje');
const textoMecanizado = document.getElementById('texto-mecanizado');
const textoOriginal = 'Descubre estas fotos increíbles tuyas. 😄';

let index = 0;

function mostrarTextoMecanizado() {
    if (index < textoOriginal.length) {
        textoMecanizado.textContent += textoOriginal.charAt(index);
        index++;
        setTimeout(mostrarTextoMecanizado, 100); // Ajusta la velocidad de aparición
    }
}

// Llama a la función para iniciar el efecto al cargar la página
window.onload = function() {
    mostrarTextoMecanizado();
};

