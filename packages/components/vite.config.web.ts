import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "./dist/web",
    lib: {
      entry: {
        box: "./src/box/index.tsx",
        button: "./src/button/index.tsx",
      },
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  plugins: [react(), dts({ tsConfigFilePath: "./tsconfig.src.json" })],
});
