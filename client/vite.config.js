import {defineConfig} from "vite";

export default defineConfig({
    server: {
        proxy: {
            "/login": {
                target: "http://localhost:4000",
                bypass: (req) => (req.method === "GET" ? req.url : undefined),
            },
        },
    },
});
