document.addEventListener("DOMContentLoaded", function () {
  // ✅ AOS
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 800, once: true });
    console.log("✅ AOS inicializado correctamente");
  }

  // ✅ Swiper
  if (typeof Swiper !== "undefined") {
    document.querySelectorAll(".swiper-container").forEach(function (el) {
      new Swiper(el, {
        loop: true,
        pagination: {
          el: el.querySelector(".swiper-pagination"),
          clickable: true,
        },
        navigation: {
          nextEl: el.querySelector(".swiper-button-next"),
          prevEl: el.querySelector(".swiper-button-prev"),
        },
      });
    });
    console.log("Swiper iniciado en todos los sliders");
  }

  // ✅ GLightbox
  if (typeof GLightbox !== "undefined") {
    GLightbox({ selector: ".glightbox" });
    console.log("GLightbox iniciado");
  }
});
