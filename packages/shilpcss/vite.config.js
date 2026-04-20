import { resolve } from "node:path";

import { defineConfig } from "vite";

import { copyFolderSync, getAbsolutePath } from "./src/lib/utils.js";

/* ============================================================================================= */

const { __dirname } = getAbsolutePath(import.meta.url);

/* ============================================================================================= */

const viteConfig = defineConfig({
	//

	/* ==============================================================================================
		BUILD
	============================================================================================== */

	build: {
		//
		minify: "oxc",
		target: ["chrome109", "firefox109", "edge109", "safari16.3"],
		emptyOutDir: true,
		outDir: "dist",

		// mark as library
		lib: {
			entry: {
				vite: resolve(__dirname, "./src/bundlers/vite.js"),
				webpack: resolve(__dirname, "./src/bundlers/webpack.js"),
				lib: resolve(__dirname, "./src/lib/index.js"),
			},

			// minify whitespace is disabled for es format
			// https://vite.dev/config/build-options#build-minify
			formats: ["es"],
		},

		// tansformer options
		rolldownOptions: {
			external: [
				"lightningcss",
				"browserslist",
				"purgecss",
				"sass",
				"webpack",
				"webpack-sources",
				// add all the node in-built modules list here which are used
				"node:path",
				"node:fs",
				"node:url",
				"node:util",
			],

			output: {
				entryFileNames: "[name].js",
				chunkFileNames: (chunkInfo) => {
					if (chunkInfo.name?.startsWith("transpile")) return "core-[hash].js";
					// default fallback for other chunks (if any)
					return "[name]-[hash].js";
				},
			},
		},
	},

	/* ==============================================================================================
		ALIASE
	============================================================================================== */

	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},

	/* ==============================================================================================
		PLUGINS
	============================================================================================== */

	plugins: [
		{
			name: "vite-plugin-copy-src-folder-to-dist",
			apply: "build",
			enforce: "post",

			closeBundle() {
				const stylesSrc = resolve(__dirname, "./src/styles");
				const stylesDest = resolve(__dirname, "./dist/styles");
				copyFolderSync(stylesSrc, stylesDest);
			},
		},
	],
});

export default viteConfig;
