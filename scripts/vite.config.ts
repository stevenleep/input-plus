import { resolve } from 'path';
import { defineConfig, UserConfigExport } from 'vite';
import { capitalize } from "./helpers";
import { BuildConfig } from "./build";

export const rootDir = resolve(__dirname, '..');
export const packagesDir = resolve(rootDir, 'packages');
export const distDir = resolve(rootDir, 'dist');

export function createViteConfig(packageName: string, options: BuildConfig = {}): UserConfigExport {
    return defineConfig({
        build: {
            cssCodeSplit: false,
            watch: {
                clearScreen: false,
            },
            lib: {
                entry: resolve(packagesDir, packageName, 'index.ts'),
                formats: ['es'],
                fileName: options.fileName || 'index',
                name: capitalize(options.name || packageName),
            },
            outDir: resolve(distDir, packageName),
            rollupOptions: {
                // make sure to externalize deps that shouldn't be bundled
                // into your library
                external: options.external || [],
                output: {
                    inlineDynamicImports: true,
                    exports: 'named',
                    // Provide global variables to use in the UMD build
                    // for externalized deps
                    globals: options.globals || {},
                },
            },
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            },
        },
    });
}