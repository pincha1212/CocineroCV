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

const tituloPC = document.getElementById('tituloSM')
const descriptionP = document.getElementById('descriptionSM')
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('btn btn-close close-modal');
const modalOverlay = document.getElementById('modal-overlay');
const img = document.getElementById('img-MSM');
const tl = gsap.timeline({ paused: true });
tl.to(img, { rotation: 360, scale: 2.0, x: '800%', y:'75%' , duration: 0.9, ease: 'power2.out',});

openModalButton.addEventListener('click', () => {
  modalOverlay.style.display = 'block';
  openModalButton.style.display = 'none';
  descriptionP.style.display = 'none';
  tituloPC.style.display = 'none';
  tl.play();
  img.style.zIndex = '1001';
  modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
  openModalButton.style.display = 'block';
  descriptionP.style.display = 'block';
  tituloPC.style.display = 'block';
  tl.reverse();
  img.style.zIndex = '998';
  modal.style.display = 'none';
});
