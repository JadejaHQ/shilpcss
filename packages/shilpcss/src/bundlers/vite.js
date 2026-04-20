import { resolve } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";

import preProcess from "@/bundlers/methods/pre-process";
import process from "@/bundlers/methods/process";
import purge from "@/bundlers/methods/purge";
import transpile from "@/bundlers/methods/transpile";

import { throwError } from "@/lib/logger";

/* ============================================================================================= */

/**
 * Transform intent based utitlities and mixins to plain css.
 * @param config - The shilp config object.
 * @returns plain css and it's mapping.
 */
const vitePluginShilpCSS = (config) => ({
	//
	name: "vite-plugin-shilpcss",

	configResolved: disableDefaultCSSMinification.bind(null),

	transform: transform.bind(null, config),
	writeBundle: writeBundle.bind(null, config),
});

/* ================================================================================================
	DISABLE DEFAULT CSS MINIFICATION - MODIFY VITE CONFIG
================================================================================================ */

const disableDefaultCSSMinification = (viteConfig) => {
	viteConfig.build ??= {};
	viteConfig.build.cssMinify = false;
};

/* ================================================================================================
	EXECUTES FOR ALL ENVS
================================================================================================ */

const transform = async (config, content, filePath) => {
	//
	if (!filePath.endsWith(".css")) return null;

	const preProcessedContent = preProcess({
		filePath,
		config,
		content,
	});

	const processedContent = process({
		filePath,
		config,
		content: preProcessedContent,
	});

	// TODO: add mapping
	return { code: processedContent, map: null };
};

/* ================================================================================================
	EXECUTES FOR BUILD ONLY
================================================================================================ */

// NOTE: this is a build hook, never runs during dev
// NOTE: don't need additional build condition like webpack plugin
const writeBundle = async (config, options, bundle) => {
	//
	const outputPath = options.dir;

	if (!outputPath) {
		throwError("Build: Output directory is required");
	}

	for (const filePath in bundle) {
		//
		if (filePath.endsWith(".css")) {
			//
			const resolvedFilePath = resolve(outputPath, filePath);
			const css = readFileSync(resolvedFilePath, "utf-8");

			const purged = await purge({
				filePath: resolvedFilePath,
				css,
				options: config.purge,
				source: config.source,
			});

			const transpiled = transpile({
				filePath: resolvedFilePath,
				css: purged.css,
				options: config.transpile,
				colorFormat: config.colorFormat,
			});

			writeFileSync(resolvedFilePath, transpiled.css);
			//
		}
	}
};

/* ============================================================================================= */

export default vitePluginShilpCSS;
