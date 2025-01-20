import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"], // Opsi ini tetap dipertahankan
  },
  server: {
    host: "0.0.0.0", // Untuk development di localhost
    port: 5173, // Port default Vite
  },
  base: "/", // Base URL untuk GitHub Pages (root domain)
});
