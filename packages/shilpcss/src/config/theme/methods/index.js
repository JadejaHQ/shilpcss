import { getValuesGetterMethod } from "@/config/values/methods";
import { INLINE_THEME_PATTERN } from "@/config/theme/constants";
import { createUtility } from "@/config/utilities/methods";

import { isStr } from "@/lib/types";
import { fresh } from "@/lib/operations";
import { throwError } from "@/lib/logger";

/* ============================================================================================= */

/**
 * Resolves inline theme function.
 * @param options - Options for resolving inline theme function to property value.
 * @param options.config - The shilp config object.
 * @param options.content - The content (css) string.
 * @param options.filePath - The file path for error logging.
 * @returns Resolved css property value.
 * @throws If the specified value resolver function is not found.
 */
export const resolveInlineTheme = ({ config, content, filePath }) => {
	//

	// return the raw content if inline theme function is not defined
	if (!(isStr(content) && fresh(INLINE_THEME_PATTERN).test(content))) {
		return content;
	}

	return content.replace(
		fresh(INLINE_THEME_PATTERN),
		//
		(rawValue, inlineValueResolveFn = "default", inlineTokens) => {
			//

			// get value resolver method
			const getValue = getValuesGetterMethod({
				resolveFn: inlineValueResolveFn,
				valueResolvers: config.valueResolvers,
				errorFn: () => {
					throwError(
						`"${filePath}" :: \`${inlineValueResolveFn}\` function does not found for \`${rawValue}\` in at \`shilpConfig.valueResolvers\``,
					);
				},
			});

			// create utility for theme tokens (value tokens always)
			const utility = createUtility(inlineTokens);
			utility.raw = rawValue;

			// inline theme config similiar like property config
			const inlineThemeConfig =
				config.inlineTheme?.[inlineValueResolveFn] || {};
			inlineThemeConfig.values = config.theme;

			// get value tokens
			const valueTokens = utility.value.split("-");

			// NOTE: opt-in variant and only consume the very first "/" and any followings will be removed.
			// `- anything after "/" will be counted as one token.
			// `- this will prevent `x/y/z` pattern. this will grow increase the complexity.
			// `- can go with `x-y-z`, this will be n tokens has the appropiate variations
			//
			// by default, "/" will be considered as part of the utility value.
			// `- below we are joining it back if `variant: true` flag is not set, but this is separated while creating utility.
			// property config explicitely need to add `variant: true` flag to make this count as variant.
			if (!inlineThemeConfig.variant && utility.variant) {
				valueTokens.push(`${valueTokens.pop()}/${utility.variant}`);
				utility.variant = undefined;
			}

			// resolve and return css property value
			return getValue({
				config,
				intentName: filePath,
				utility,
				tokens: valueTokens,
				values: inlineThemeConfig.values,
				inlineThemeConfig,
			});
		},
	);
};
