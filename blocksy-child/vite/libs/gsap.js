import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ GSAP cargado");
  // Ejemplo simple
  gsap.from("h1", { opacity: 0, y: 50, duration: 1 });
});
