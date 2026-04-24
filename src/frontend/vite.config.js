import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "../main/resources/public",
        emptyOutDir: true,
    },
    server: {
        open: true,
        port: 5173,
    },
});
