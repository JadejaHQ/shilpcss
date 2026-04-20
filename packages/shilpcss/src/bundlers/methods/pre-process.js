import * as sass from "sass";

import { resolveConfig } from "@/config/index/methods";
import { SCSS_IMPORTS } from "@/config/index/constants";
import { generateComponents } from "@/config/components/methods";
import { resolveMixins } from "@/config/mixins/methods";
import { resolveInlineTheme } from "@/config/theme/methods";

import { logDivider, logNewLine, throwError } from "@/lib/logger";

/* ============================================================================================= */

/**
 * Pre-process the content before compilation by SCSS.
 * @param options - Options for pre-processing the content.
 * @param options.config - The shilp config object.
 * @param options.content - The css content to pre-process.
 * @param options.filePath - The file path for error logging.
 * @returns The pre-processed content.
 * @throws If an error occurs during pre-processing.
 * @note Resolves configuration, generates components, and compiles SCSS.
 */
const preProcess = ({ config, content, filePath }) => {
	//
	try {
		//

		/* ==========================================================================================
			RESOLVE CONFIG
		========================================================================================== */

		// resolves in order:
		// values, theme, properties, intents, components, mixins
		resolveConfig(config);

		/* ============================================================================================
			RESOLVE CONTENT - COMPONENTS AND MIXINS
		============================================================================================ */

		content = generateComponents({ config, content });
		content = resolveMixins({ config, content, filePath });

		/* ============================================================================================
			RESOLVE INLINE THEME
		============================================================================================ */

		// NOTE: this is added here to prevent scss compilation error
		// one is already at the process method return statement.
		// 1. before scss compilation
		// 2. after processing all utilities
		content = resolveInlineTheme({ config, content, filePath });

		/* ============================================================================================
			SCSS COMPILATION
		============================================================================================ */

		const scssImports = config.scss?.imports?.(SCSS_IMPORTS) || SCSS_IMPORTS;
		const uniqueImports = new Set(scssImports.split(";") || []);

		const resolvedContent = [...uniqueImports].join(";") + content;

		// TODO: add mapping
		const defaultOptions = {};
		const compiledCSS = sass.compileString(
			resolvedContent,
			config.scss?.options?.({ defaultOptions, css, filePath }) ||
				defaultOptions,
		)?.css;

		return compiledCSS || content;
		//
	} catch (err) {
		//
		logDivider();
		logNewLine(`Error: Pre-processing :: ${filePath}`);
		throwError(err);
		logDivider();
	}
};

/* ============================================================================================= */

export default preProcess;
