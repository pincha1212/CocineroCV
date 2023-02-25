// Selecciona el enlace correspondiente en la lista de encabezado y la sección objetivo
const link = document.querySelector("header nav ul li#section1 a");
const section = document.querySelector("section#recetas");

// Establece la animación de aparición utilizando GSAP
const tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power2.inOut"
  }
});

// Define la animación para la sección objetivo
tl.from(section, { opacity: 0, x: -50 });

// Escucha el evento click en el enlace de la lista de encabezado y reproduce la animación
link.addEventListener("click", () => {
  tl.restart();
});
