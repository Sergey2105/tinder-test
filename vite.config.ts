import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        svgr({
            include: "**/*.svg",
        }),
    ],
    server: {
        host: "0.0.0.0",
        port: 3000,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
