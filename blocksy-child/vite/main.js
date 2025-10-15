// Importar todas las librerías desde la carpeta libs
// 
// IMPORTAR SOLO LAS LIBRERIAS QUE SE USEN !!
//
import "./libs/aos.js";
import "./libs/swiper.js";
import "./libs/glightbox.js";
import "./libs/gsap.js";
import "./libs/lenis.js";
import "./libs/splittype.js";
import "./libs/pixi.js";
import "./libs/barba.js";

// Importar lógica general (puede crecer)
// 
// IMPORTAR SOLO LOS ARCHIVOS QUE SE USEN
//
import "./modules/init.js";

/*
Las librerias dentro de libs tienen valores y comportamientos
por defecto en todo el dom.

Puedo modificar y usar la misma libreria las veces que quiera en cualquier elemento
trabajando con archivos .js dentro de modules. Puedo crear las funciones que quiera y modularizar

Importar unicamente las librerias y archivos .js (modules) que se usen
para no inyectar codigo .js de mas al ecosistema de wordpress.

*/