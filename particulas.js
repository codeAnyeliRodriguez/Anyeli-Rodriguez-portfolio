$(document).ready(function(){
  var ancho = $(window).width();

  if(ancho > 600){
    // ejecutamos codigo

/* particlesJS('dom-id', params);
/* @dom-id : set the html tag id [string, optional, default value : particles-js]
/* @params: set the params [object, optional, default values : check particles.js] */

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    color: '#fff', // Color del vertice
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle" // Establecemos cual de las 3 figuras queremos para vertice
    opacity: {
      opacity: -1.5, // Opacidad del vertice
      // 0
      anim: {
        enable: true,
        speed: 1.5,
        opacity_min: -2,
        // 0
        sync: false
      }
    },
    size: 4,
    size_random: true,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff', // Color de la arista
      opacity: 0, // Opacidad de la arista
      // 0
      width: -1,
      // 1
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1 // Velocidad a la que se mueven las aristas
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 300
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab', // "grab" of false
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: true,
        mode: 'out', // "out" or "bounce"
        density_auto: false,
        density_area: 20 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
        // 800
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});
}
});