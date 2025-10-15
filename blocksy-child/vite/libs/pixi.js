import * as PIXI from "pixi.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Pixi cargado");

  const app = new PIXI.Application({
    width: 300,
    height: 300,
    backgroundAlpha: 0
  });

  const container = document.getElementById("pixi-container");
  if (container) container.appendChild(app.view);
});
