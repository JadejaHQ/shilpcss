import theme from "@/config/theme/data";
import inlineTheme from "@/config/theme/data/inline-theme";

import { isObj, isFn } from "@/lib/types";
import { deepMergeObj } from "@/lib/operations";
import { throwError } from "@/lib/logger";

/* ============================================================================================= */

/**
 * Resolves and merges the theme and inline theme configuration.
 * @param config - The shilp config object.
 * @note Initializes `shilpConfig.theme` and `shilpConfig.inlineTheme`.
 */
export const resolveThemeConfig = (config) => {
	//

	/* ==============================================================================================
		RESOLVE THEME
	============================================================================================== */

	const isThemeObj = isObj(config.theme);
	if (!isThemeObj && !isFn(config.theme)) config.theme = theme;

	const inBuiltTheme =
		(isThemeObj ? config.theme : config.theme(config.values)) || {};
	const userTheme =
		(isFn(config.extend.theme)
			? config.extend.theme(config.values, inBuiltTheme)
			: config.extend.theme) || {};

	const resolvedTheme = deepMergeObj(inBuiltTheme, userTheme);

	/* ==============================================================================================
		INLINE THEME VALIDATIONS
	============================================================================================== */

	Object.entries(resolvedTheme.screens).forEach(([key, val]) => {
		if (!val.endsWith("px")) {
			throwError(
				`THEME: \`theme.screens.${key}\` → breakpoint value must be absolute (px). Other units are not supported.`,
			);
		}
	});

	//

	// set resolved theme
	config.theme = resolvedTheme;

	/* ==============================================================================================
		RESOLVE INLINE THEME CONFIG
	============================================================================================== */

	const inBuiltInlineTheme = config.inlineTheme || inlineTheme;

	config.inlineTheme = deepMergeObj(
		inBuiltInlineTheme,
		config.extend.inlineTheme || {},
	);
};
