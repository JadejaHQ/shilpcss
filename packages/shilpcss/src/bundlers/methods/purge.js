import { PurgeCSS } from "purgecss";

import { PURGECSS_SOURCE_FOR_FRAMEWORK } from "@/config/index/constants";

import { logDivider, logNewLine, throwError, warnNewLine } from "@/lib/logger";
import { isArr, isStr } from "@/lib/types";
import { fresh } from "@/lib/operations";

/* ============================================================================================= */

/**
 * Purge (remove) unused CSS.
 * @param options - Options for removing the redundant css.
 * @param options.css - The CSS to be purged.
 * @param options.options - Replace default options for purging.
 * @param options.filePath - The file path of the content for error logging.
 * @param options.source - The framework name or custom source to scan files for purging. can be overrided by `shilpConfig.purge().content`.
 * @returns An object containing the purged CSS and rejected CSS.
 * @throws If an error occurs during purging.
 * @note use `.purge-ignore-<start|end> { all: unset; }` to prevent styles block from purging.
 */
const purge = async ({ css, options, filePath, source }) => {
	//
	if (!source) return { css };

	try {
		//

		/* ============================================================================================
			DEFAULT OPTIONS
		============================================================================================ */

		const defaultOptions = {
			content: [], // source files for scanning styles
			css: [{ raw: css }], // styles to be purged
			safelist: [],

			// NOTE: false because of purging do not honor ignore blocks (misconfiguration?)
			// NOTE: encountered that this can remove necessary styles (misconfiguration?)
			// TODO: need to investigate this further though
			variables: false,
			keyframes: false,
			fontFace: false,
		};

		/* ============================================================================================
			OPTIONS - CONTENT  (markup files to scan)
		============================================================================================ */

		// add purge sources to scan
		const preDefinedSource = isStr(source)
			? PURGECSS_SOURCE_FOR_FRAMEWORK[source]
			: source;
		if (isArr(preDefinedSource) && preDefinedSource.length) {
			defaultOptions.content = preDefinedSource;
		}

		/* ============================================================================================
			FINAL OPTIONS  (provided by user using `shilpConfig.purge`?)
		============================================================================================ */

		// finalizing the purge options
		const finalOptions =
			options?.({ defaultOptions, css, filePath }) || defaultOptions;

		if (!finalOptions.content?.length) {
			throwError(
				"`content` is expected for scaning files for purging. The output will be empty!",
			);
		}

		if (!isStr(finalOptions.css?.[0]?.raw)) {
			throwError(
				"CSS string is expected as: `css: [{ raw: 'your css here' }]`",
			);
		}

		if (finalOptions.css[0].raw.trim() === "") {
			logDivider();
			warnNewLine(`Warning: Empty CSS file :: ${filePath}`);
			return { css: "" };
		}

		/* ============================================================================================
			FINAL PURGE OPTIONS - RAW CSS TEXT WITH IGNORE BLOCK COMMENTS
		============================================================================================ */

		finalOptions.css = [
			{
				raw: finalOptions.css[0].raw
					.replace(
						fresh(/\.purge-ignore-start\s*\{[\s\S]*?\}/g),
						"/* purgecss start ignore */",
					)
					.replace(
						fresh(/\.purge-ignore-end\s*\{[\s\S]*?\}/g),
						"/* purgecss end ignore */",
					),
			},
		];

		/* ============================================================================================
			EXECUTE PURGE CSS
		============================================================================================ */

		// TODO: use mapping
		const purged = await new PurgeCSS().purge(finalOptions);

		const purgedCSS = purged?.[0]?.css;
		const rejectedCSS = purged?.[0]?.rejectedCss;

		if (rejectedCSS) {
			logDivider();
			warnNewLine("Warning: Rejected CSS while Purging");
			warnNewLine(rejectedCSS);
		}

		if (!(isStr(purgedCSS) && purgedCSS.trim().length)) {
			throwError("Error: CSS Purge failed!");
		}

		return { css: purgedCSS, rejectedCSS };
		//
	} catch (err) {
		//
		logDivider();
		logNewLine(`Error: Purging :: ${filePath}`);
		throwError(err);
		logDivider();
	}
};

/* ============================================================================================= */

export default purge;
