import barba from "@barba/core";

document.addEventListener("DOMContentLoaded", () => {
  barba.init({
    transitions: [
      {
        name: "fade",
        leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0,
            duration: 0.5,
          });
        },
        enter(data) {
          return gsap.from(data.next.container, {
            opacity: 0,
            duration: 0.5,
          });
        },
      },
    ],
  });

  console.log("✅ Barba.js activo");
});
