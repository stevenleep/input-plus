import { defineConfig } from 'vite';
import reactPlugin from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.tsx',
            name: 'InputPlus',
            fileName: 'index',
        },
        sourcemap: true,
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
    plugins: [
        reactPlugin(),
        dts({ rollupTypes: false, insertTypesEntry: true })
    ],
});
