import { resolve } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";

import * as webpack from "webpack";
import * as webpackSources from "webpack-sources";

// Fix cjs and esm conflict
const { Compilation } = webpack.default;
const { RawSource } = webpackSources.default;

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
class WebpackPluginShilpCSS {
	//
	constructor(config) {
		this.config = config;
	}

	apply(compiler) {
		//

		this.removeDefaultCSSMinificationPlugins(compiler);

		this.transform(compiler);

		this.writeBundle(compiler);
	}

	/* ==============================================================================================
		REMOVE DEFAULT CSS MINIFICATION PLUGINS
	============================================================================================== */

	removeDefaultCSSMinificationPlugins(compiler) {
		//
		compiler.options.optimization.minimizer ??= [];

		compiler.options.optimization.minimizer.filter(
			(m) =>
				!["CssMinimizerPlugin", "LightningCssMinimizerPlugin"].includes(
					m.constructor?.name,
				),
		);
	}

	/* ==============================================================================================
		EXECUTES FOR ALL ENVS
	============================================================================================== */

	transform(compiler) {
		compiler.hooks.thisCompilation.tap(
			"WebpackPluginShilpCSSPreProcess",
			(compilation) => {
				//
				compilation.hooks.processAssets.tap(
					{
						name: "transform",
						stage: Compilation.PROCESS_ASSETS_STAGE_PRE_PROCESS,
					},
					(assets) => {
						//
						for (const filePath in assets) {
							//
							if (filePath.endsWith(".css")) {
								//
								const content = compilation
									.getAsset(filePath)
									?.source?.source?.();

								const preProcessedContent = preProcess({
									filePath,
									config: this.config,
									content,
								});

								const processedContent = process({
									filePath,
									config: this.config,
									content: preProcessedContent,
								});

								compilation.updateAsset(
									filePath,
									new RawSource(processedContent),
								);
							}
						}
					},
				);
			},
		);
	}

	/* ==============================================================================================
		EXECUTES FOR BUILD ONLY
	============================================================================================== */

	// purge and transpile
	writeBundle(compiler) {
		//
		if (compiler.options.mode !== "development") {
			//

			compiler.hooks.afterEmit.tap(
				"WebpackPluginShilpCSSBuild",
				(compilation) => {
					//
					const outputPath = compilation.outputOptions.path;

					if (!outputPath) {
						throwError("Build: Output directory is required");
					}

					for (const filePath in compilation.assets) {
						//
						if (filePath.endsWith(".css")) {
							//
							const resolvedFilePath = resolve(outputPath, filePath);
							const css = readFileSync(resolvedFilePath, "utf-8");

							// NOTE: There's issue if using async/await here.
							purge({
								filePath: resolvedFilePath,
								css,
								options: this.config.purge,
								source: this.config.source,
								//
							}).then((purged) => {
								//
								const transpiled = transpile({
									filePath: resolvedFilePath,
									css: purged.css,
									options: this.config.transpile,
									colorFormat: this.config.colorFormat,
								});

								writeFileSync(resolvedFilePath, transpiled.css);
							});
						}
					}
				},
			);
		}
	}
}

/* ============================================================================================= */

export default WebpackPluginShilpCSS;
