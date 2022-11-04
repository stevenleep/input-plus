import { resolve } from "path";
import { statSync } from "fs";
import { build, UserConfig, BuildOptions } from "vite";
import { GlobalsOption, ExternalOption } from "rollup";
import { createViteConfig, packagesDir } from "./vite.config";

const prefix = "input-plus";
export interface BuildConfig extends BuildOptions {
    packageName?: string;
    name?: string;
    fileName?: string;
    external?: ExternalOption;
    globals?: GlobalsOption;
}
const buildConfigs: BuildConfig[] = [
    {
        packageName: prefix + "-vue",
        name: "InputPlusVue",
        fileName: "index",
        external: ["vue"],
        globals: {
            vue: "Vue",
        },
    },
    {
        packageName: prefix + "-react",
        fileName: "index",
        name: "InputPlusReact",
        external: ["react", "react-dom"],
        globals: {
            react: "React",
            "react-dom": "ReactDOM",
        },
    },
];

const isDirectory = (path: string) => {
    try {
        return statSync(path).isDirectory();
    }
    catch (error) {
        return false;
    }
}

const isFileExist = (path: string) => {
    try {
        return statSync(path).isFile();
    } catch (error) {
        return false;
    }
};

const startBuild = async () => {
    let buildIndex = 0;
    const buildNext = async () => {
        const config = buildConfigs[buildIndex];
        if (!config || !config.packageName) { return; }

        const isDirectoryExist = isDirectory(resolve(packagesDir, config.packageName));
        const isTargetFileExist = isFileExist(resolve(packagesDir, config.packageName, "index.ts"));
        if (!isDirectoryExist || !isTargetFileExist) { return; }

        // build the package
        await build(createViteConfig(config.packageName, config) as UserConfig);

        // build next
        buildIndex++;
        await buildNext();
    }

    await buildNext();
};

startBuild();