// efecto de carga
window.addEventListener('load', function () {
  var loader = document.getElementById('loader');
  setTimeout(function () {
    loader.style.display = 'none';
  }, 1000); // Espera 1 segundo antes de ocultar el contenedor de carga
});

// jQuery para el menu
$(document).ready(main);
var contador = 1;

function main() {
  $('.menu_bar').click(function () {
    // $('nav').toggle();
    if (contador == 1) {
      $('nav').animate({
        left: '0'
      });
      contador = 0;
    } else {
      contador = 1;
      $('nav').animate({
        left: '-100%'
      });
    }
  });
}
// -----------
// efecto maquina de escribir
const maquina1 = document.getElementById('maquina-escribir1');
const maquina2 = document.getElementById('header-habilidad');

const maquinaescribir1 = (text = '', tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('');
  // console.log(arrayCaracteres);
  etiqueta.innerHTML = ''
  let cont = 0;
  let escribir = setInterval(function () {
    etiqueta.innerHTML += arrayCaracteres[cont]
    cont++
    if (cont === arrayCaracteres.length) {
      clearInterval(escribir)
    }
  }, tiempo);
}

// parq que el efecto se ejecute luego que la pagina cargue
 window.onload = function() {
  maquinaescribir1('¡Hola mundo! soy Anyeli Rodríguez Desarrolladora Full-Stack. Nivel Junior. Este es mi portfolio donde estarán varios de mis proyectos tanto mini juegos como también de utilidades y mas, espero les sean de su agrado.', 50, maquina1);

 }

maquinaescribir1('Mis Habilidades',80, maquina2);


// funcionalidad de desplazar hacia arriba
const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// para clickar en habilidades
function mostrarTitulo(elemento) {
  alert(elemento.getAttribute("title"));
}
