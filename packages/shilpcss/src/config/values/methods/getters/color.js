import { LCH_COLOR_FORMAT_PATTERN } from "@/config/index/constants";
import { throwError } from "@/lib/logger";
import { fresh } from "@/lib/operations";
import { isObj } from "@/lib/types";

/* ================================================================================================
	GET RAW COLOR VALUE  (AS-IS FROM `propertyConfig.values`)
================================================================================================ */

/**
 * Retrieves the raw color value based on the provided configuration.
 * @param options - Options for getting raw color.
 * @param options.values - The values object containing resolved values.
 * @param options.tokens - The value tokens used for property resolution.
 * @param options.utility - The utility object containing raw value and other properties.
 * @param options.intentName - The name of the intent to which the property belongs.
 * @throws If the utility cannot be resolved to color value.
 * @returns The raw color value.
 */
export const getRawColor = ({ values, tokens, utility, intentName }) => {
	//
	let value = "";

	let obj = values;
	let i = 0;

	while (!value && i <= tokens.length) {
		const token = tokens[i];
		const nestedObj = obj[token] || obj["DEFAULT"] || obj[500];

		if (!nestedObj) break;

		if (!isObj(nestedObj)) {
			value = nestedObj;
			break;
		}

		obj = nestedObj;
		i++;
	}

	if (!value) {
		throwError(
			`${intentName.toUpperCase()} -> COLORS: ${utility.raw} not resolved!`,
		);
	}

	return value;
};

/* ================================================================================================
	GET PROCESSED RAW COLOR VALUE
================================================================================================ */

/**
 * Retrieves the color value based on the provided configuration.
 * @param options - Options for getting color with format.
 * @param options.values - The values object containing resolved values (may be nested).
 * @param options.tokens - The value tokens used for property resolution.
 * @param options.utility - The utility object containing raw value and other properties.
 * @param options.intentName - The name of the intent to which the property belongs.
 * @throws If the propvided opacity in utility is out of range.
 * @returns The color value in oklch format with optional opacity.
 */
export const getColor = ({ values, tokens, utility, intentName }) => {
	//
	const rawColor = getRawColor({ values, tokens, utility, intentName });

	const isLCHPattern = fresh(LCH_COLOR_FORMAT_PATTERN).test(rawColor);

	// value with no css variable and no oklch color pattern
	if (!rawColor.startsWith("var") && !isLCHPattern) {
		return rawColor;
	}

	let opacity = utility.variant;

	/* if not has opacity */
	//
	if (!opacity /* string */) return `oklch(${rawColor})`;

	/* if has opacity */

	// no digit
	if (!/\d/.test(opacity)) {
		throwError(
			`${intentName.toUpperCase()} -> COLORS: ${
				utility.raw
			} - Expected digits for opacity.`,
		);
	}

	opacity = parseInt(opacity);

	// not in range
	if (opacity < 0 || opacity > 100) {
		throwError(
			`${intentName.toUpperCase()} -> COLORS: ${
				utility.raw
			} - Expected range: 0 to 100 for opacity.`,
		);
	}

	// looks good in comments only :p
	// if (opacity === 0) return values.none || "transparent";
	// if (opacity === 100) return `oklch(${rawColor})`;

	return `oklch(${rawColor} / ${opacity / 100})`;
};
