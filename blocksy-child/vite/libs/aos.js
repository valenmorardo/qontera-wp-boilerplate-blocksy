import AOS from "aos";
import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 800, once: true });
  console.log("✅ AOS inicializado");
});
