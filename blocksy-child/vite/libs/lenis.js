import Lenis from "@studio-freight/lenis";

document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  console.log("✅ Lenis (scroll suave) activo");
});
