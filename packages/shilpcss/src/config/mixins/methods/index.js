import { RESERVED_NAMES } from "@/config/index/constants";
import {
	FUNCTION_MIXIN_ARGS_PLACEHOLDER_PATTERN,
	MIXINS_VARIANT_PLACEHOLDER_PATTERN,
} from "@/config/mixins/constants";

import { throwError } from "@/lib/logger";
import { deepCopy, fresh } from "@/lib/operations";
import { isFn, isStr } from "@/lib/types";

/* ================================================================================================
	LOCAL CONSTANTS
================================================================================================ */

const ARGS_NAME = "$args";
const DEFAULT_CONTENT = "@content;";

/* ================================================================================================
	CREAT SCSS MIXIN
================================================================================================ */

/**
 * Generates a SCSS mixin definition.
 * @param options - Options for creating mixins (normal and function).
 * @param options.mixinConfig - The mixin config object.
 * @param options.mixinName - The name of the mixin.
 * @param options.variantName - The name of the variant to generate.
 * @param options.raw - raw value of provided mixin for error reporting.
 * @returns The generated CSS mixin string.
 * @note Handles nested variants and arguments for mixin generation.
 */
export const createMixin = ({ mixinConfig, mixinName, variantName, raw }) => {
	//
	let variant = mixinConfig.variants[variantName];

	if (!variant) {
		throwError(
			`MIXIN: variant \`${variantName}\` doesn't exist for \`${raw}\``,
		);
	}

	let content = DEFAULT_CONTENT;
	let hasArgs = false;

	if (isStr(variant)) variant = [variant];

	variant = deepCopy(variant);

	// check for `<number>` pattern, if found, use mixin as function else use plain mixin
	while (variant.length) {
		const nestedVariant = variant
			.pop()
			.replace(
				fresh(FUNCTION_MIXIN_ARGS_PLACEHOLDER_PATTERN),
				`#{list.nth(${ARGS_NAME}, $1)}`,
			);

		if (!hasArgs && nestedVariant.includes("list.nth")) hasArgs = true;

		content = `${nestedVariant} { ${content} }`;
	}

	const fn = hasArgs ? `(${ARGS_NAME}...)` : "";

	return `@mixin ${mixinName}-${variantName}${fn} { ${content} }`;
};

/* ================================================================================================
	RESOLVE SHILP CSS MIXIN
================================================================================================ */

/**
 * Resolves mixins by replacing Shilp CSS mixins with SCSS mixins definitions or CSS selectors.
 * @param options - Options for creating mixins definitions or CSS selectors.
 * @param options.config - The shilp config object.
 * @param options.content - The content string containing pseudo mixin.
 * @param options.filePath - The file path for error logging.
 * @returns The content string with resolved mixins.
 * @note If using function mixin, please provide the args within quotes (`""`)
 */
export const resolveMixins = ({ config, content, filePath }) => {
	// this will contains mixins definations
	let mixins = "";

	content = content.replace(
		fresh(MIXINS_VARIANT_PLACEHOLDER_PATTERN),
		//
		(rawSelector, mixinName, variantName, fn = "") => {
			//

			// return the content for reserved names
			if (RESERVED_NAMES.includes(mixinName)) return rawSelector;

			// get intent config
			const mixinConfig = config.mixins[mixinName];

			// throw error if mixin config not found
			if (!mixinConfig) {
				throwError(
					`MIXINS: \`${mixinName}\` mixin name do not exist in shilp config.\nIt is used in "${filePath}".`,
				);
			}

			/* ==========================================================================================
				DISABLE MIXIN
			========================================================================================== */

			// if mixin is disabled, then don't apply styles defined inside it
			if (mixinConfig.disable) {
				//
				const disabledMixin =
					"@mixin disabled-mixin { @if false { @content; } }";
				//
				if (!mixins.includes(disabledMixin)) mixins += disabledMixin;

				return "@include disabled-mixin {";
			}

			/* ==========================================================================================
				CUSTOM MIXIN RESOLVER
			========================================================================================== */

			if (isFn(mixinConfig.resolve)) {
				//
				const resolvedMixin =
					mixinConfig.resolve({
						content,
						config,
						mixinName,
						variantName,
						mixinConfig,
						fn,
						raw: rawSelector,
						filePath,
					}) || "";

				if (!resolvedMixin.selector) {
					throwError(
						`MIXIN -> '${rawSelector}': resolve() must return a selector!`,
					);
				}

				if (resolvedMixin.definition) {
					//
					if (!resolvedMixin.definition.startsWith("@mixin ")) {
						throwError(
							`MIXIN -> '${rawSelector}': resolve() must return a '@mixin' definition!`,
						);
					}

					if (!resolvedMixin.selector.startsWith("@include ")) {
						throwError(
							`MIXIN -> '${rawSelector}': RESOLVED selector must start with '@include'`,
						);
					}

					if (!resolvedMixin.selector.endsWith("{")) {
						throwError(
							`MIXIN -> '${rawSelector}': RESOLVED selector must end with '{'`,
						);
					}

					if (!content.includes(resolvedMixin.definition)) {
						mixins += resolvedMixin.definition;
					}
					//
				}

				return resolvedMixin.selector;
			}

			/* ==========================================================================================
				DEFAULT MIXIN RESOLVER
			========================================================================================== */

			const defineMixin =
				createMixin({
					content,
					config,
					mixinName,
					variantName,
					mixinConfig,
					fn,
					raw: rawSelector,
					filePath,
				}) || "";

			if (!content.includes(defineMixin)) mixins += defineMixin;

			return `@include ${mixinName}-${variantName}${fn} {`;
		},
	);

	return mixins + content;
};
