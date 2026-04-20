import { transform, browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";

import {
	DEFAULT_BROWSER_TARGET,
	LCH_COLOR_FORMAT_PATTERN,
} from "@/config/index/constants";

import { logDivider, logNewLine, throwError } from "@/lib/logger";
import { lchToRgb } from "@/lib/convert";
import { fresh } from "@/lib/operations";

/* ============================================================================================= */

/**
 * Transpile CSS code for cross-browser and legacy versions compatibility.
 * @param options - Options for transpiling and minifying the css.
 * @param options.css - The CSS content to be transpiled.
 * @param options.options - Replace default options for transpilation.
 * @param options.filePath - The file path of the content for error logging.
 * @param options.colorFormat - Set color format for the styling. (default: oklch, optional: rgb)
 * @returns An object containing the transpiled CSS code and source map.
 * @throws If an error occurs during transpilation.
 */
const transpile = ({ css, options, filePath, colorFormat }) => {
	//
	try {
		//

		let finalCSS = css;

		/* ============================================================================================
			OUTPUT COLOR FORMAT - "oklch" (default), "rgb")
		============================================================================================ */

		if (colorFormat === "rgb") {
			// NOTE: due to this, can't use `@supports` with oklch support, to add any colors, as of now
			// TODO: look into this?
			finalCSS = finalCSS
				.replace(
					fresh(LCH_COLOR_FORMAT_PATTERN),
					(lchStr) => lchToRgb({ str: lchStr }).str,
				)
				.replace(fresh(/oklch/g), "rgb");
		}

		/* ============================================================================================
			DEFAULT OPTIONS
		============================================================================================ */

		const defaultOptions = {
			code: Buffer.from(finalCSS),
			minify: true,
			sourceMap: true,
			targets: createCSSTargets(DEFAULT_BROWSER_TARGET),
			nonStandard: {
				deepSelectorCombinator: true, // vue, angular
			},
		};

		/* ============================================================================================
			FINAL OPTIONS  (provided by user using `shilpConfig.transpile`?)
		============================================================================================ */

		const finalOptions =
			options?.({
				defaultOptions,
				DEFAULT_BROWSER_TARGET,
				createCSSTargets,
				css: finalCSS,
				originalCSS: css,
				filePath,
			}) || defaultOptions;

		/* ============================================================================================
			EXECUTE LIGHTNING CSS
		============================================================================================ */

		// TODO: use mapping
		const { code, map = null } = transform(finalOptions);

		if (!code) throwError("CSS Transpilation failed!");

		return { css: code?.toString?.(), map };
		//
	} catch (err) {
		//
		logDivider();
		logNewLine(`Error: Transpiling :: ${filePath}`);
		throwError(err);
		logDivider();
	}
};

/* ============================================================================================= */

const createCSSTargets = (cssTarget) => {
	return browserslistToTargets(browserslist(cssTarget));
};

/* ============================================================================================= */

export default transpile;
