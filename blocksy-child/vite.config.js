import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "vite",
  build: {
    outDir: "../qontera_assets/js",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "vite/main.js")
      },
      output: {
        entryFileNames: "custom.js"
      }
    }
  }
});
