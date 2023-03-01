// Selecciona los enlaces correspondientes en la lista de encabezado y las secciones objetivos
const link1 = document.querySelector("header nav ul li:nth-child(1) a");
const section1 = document.querySelector("section#sobre-mi");
const link2 = document.querySelector("header nav ul li:nth-child(2) a");
const section2 = document.querySelector("section#recetas");
const link3 = document.querySelector("header nav ul li:nth-child(3) a");
const section3 = document.querySelector("section#experiencia-laboral");
const link4 = document.querySelector("header nav ul li:nth-child(4) a");
const section4 = document.querySelector("section#habilidades");
const link5 = document.querySelector("header nav ul li:nth-child(5) a");
const section5 = document.querySelector("section#educacion"); // Selecciona la seccion #educacion

// Establece la animación de aparición utilizando GSAP
const tl1 = gsap.timeline({
  defaults: {
    duration: 3,
    ease: "power2.inOut"
  }
});

const tl2 = gsap.timeline({
  defaults: {
    duration: 3,
    ease: "power2.Out"
  }
});

const tl3 = gsap.timeline({
  defaults: {
    duration: 3,
    ease: "power2.inOut"
  }
});

const tl4 = gsap.timeline({
  defaults: {
    duration: 3,
    ease: "power2.Out"
  }
});

const tl5 = gsap.timeline({
  defaults: {
    duration: 3,
    ease: "power2.inOut"
  }
});

// Define la animación para las secciones objetivos
tl1.from(section1, { opacity: 0,y: -80 });
tl2.from(section2, { opacity: 0,y: -80 });
tl3.from(section3, { opacity: 0,y: -80 });
tl4.from(section4, { opacity: 0,y: -80 });
tl5.from(section5, { opacity: 0,y: -80 });

// Escucha el evento click en los enlaces de la lista de encabezado y reproduce la animación correspondiente
link1.addEventListener("click", () => {
  tl1.restart();
});

link2.addEventListener("click", () => {
  tl2.restart();
});

link3.addEventListener("click", () => {
  tl3.restart();
});

link4.addEventListener("click", () => {
  tl4.restart();
});

link5.addEventListener("click", () => {
  tl5.restart();
});



const tareasTitulo = document.getElementById('tareas-titulo');
const tareasLista = document.getElementById('tareas-lista');

tareasTitulo.addEventListener('click', () => {
  gsap.from(tareasLista, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
  });
});

