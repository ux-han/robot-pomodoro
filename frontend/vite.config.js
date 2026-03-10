import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use relative base for production so built files work when loaded from file:// or inside Electron
export default defineConfig(({ command }) => ({
  base: command === "build" ? "./" : "/",
  plugins: [react()],
}));
