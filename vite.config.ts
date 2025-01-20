import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/arielyrd.github.io/", // Sesuaikan dengan nama repositori GitHub Anda
  server: {
    host: "0.0.0.0", // Untuk development di localhost
    port: 5173, // Port default Vite
  },
});
