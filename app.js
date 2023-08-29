// efecto de carga
window.addEventListener('load', function () {
  var loader = document.getElementById('loader');
  setTimeout(function () {
    loader.style.display = 'none';
  }, 1000); // Espera 1 segundo antes de ocultar el contenedor de carga
});


// ---multidioma
var check = document.querySelector(".check");
check.addEventListener("click",idioma);

function idioma(){
  // console.log(check.checked);
  let id = check.checked;
  if(id==true){
    location.href="es/index.html";
  }else{
    location.href="../index.html";
  }
}

// --

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
/* const maquina2 = document.getElementById('header-habilidad'); */
const maquina3 = document.getElementById('maquina-escribir3');


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

// para que el efecto se ejecute luego que la pagina cargue
window.onload = function () {
  maquinaescribir1('Hello World! I\'m Anyeli Rodríguez Full-Stack Developer. This is my portfolio where several of my projects will be, both mini games and utilities and more, I hope you like them.', 25, maquina1);

}

/* maquinaescribir1('Mis Habilidades', 80, maquina2); */



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
