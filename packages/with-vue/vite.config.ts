import { defineConfig } from 'vite';
import VuePlugin from "@vitejs/plugin-vue";
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
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            }
        },
    },
    plugins: [
        VuePlugin(),
        dts({ rollupTypes: false, insertTypesEntry: true })
    ],
});
