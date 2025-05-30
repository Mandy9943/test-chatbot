import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/main.tsx",
      formats: ["iife"], // formato para navegador
      name: "ChatWidget",
      fileName: () => "embed.bundle.js",
    },
  },
});
