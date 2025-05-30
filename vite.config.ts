import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    lib: {
      entry: "./src/main.tsx",
      formats: ["iife"], // formato para navegador
      name: "ChatWidget",
      fileName: () => "embed.bundle.js",
    },
  },
});
