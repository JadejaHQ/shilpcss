import { throwError } from "@/lib/logger";
import { isObj, isStr } from "@/lib/types";

/* ================================================================================================
	GET RAW SPACING VALUE  (AS-IS FROM `propertyConfig.values`)
================================================================================================ */

/**
 * Retrieves the raw spacing value based on the provided configuration.
 * @param options - Options for getting raw spacing.
 * @param options.values - The values object containing resolved values (may be nested).
 * @param options.tokens - The value tokens used for property resolution.
 * @param options.utility - The utility object containing raw value and other properties.
 * @param options.intentName - The name of the intent to which the property belongs.
 * @throws If the utility cannot be resolved to spacing value.
 * @returns The raw spacing value.
 */
export const getRawSpacing = ({ values, tokens, utility, intentName }) => {
	//
	let value = "";

	let obj = values;
	let i = 0;

	while (!value && i <= tokens.length) {
		//
		const token = tokens[i];
		const nestedObj = obj[token] ?? obj["DEFAULT"];

		if (!nestedObj && nestedObj !== 0) break;

		if (!isObj(nestedObj)) {
			value = nestedObj;
			break;
		}

		obj = nestedObj;
		i++;
	}

	if (!value && value !== 0) {
		throwError(
			`${intentName.toUpperCase()} -> SPACING: ${utility.raw} not resolved!`,
		);
	}

	return value;
};

/* ================================================================================================
	GET PROCESSED SPACING VALUE
================================================================================================ */

/**
 * Retrieves the spacing value based on the provided configuration.
 * @param options - Options for getting spacing in rem (mostly).
 * @param options.values - The values object containing resolved values (may be nested).
 * @param options.tokens - The value tokens used for property resolution.
 * @param options.utility - The utility object containing raw value and other properties.
 * @param options.intentName - The name of the intent to which the property belongs.
 * @returns The spacing value, either in px or converted to rem.
 */
export const getSpacing = ({ values, tokens, utility, intentName }) => {
	//
	const rawSpacing = getRawSpacing({
		values,
		tokens,
		utility,
		intentName,
	});

	const _isStr = isStr(rawSpacing);

	if (
		_isStr &&
		(rawSpacing.includes("calc") || !rawSpacing.endsWith("px")) // covers "auto" keyword for margin
	) {
		return rawSpacing;
	}

	// 4 precision decimal unless any of it, is non-zero
	return `${(parseFloat(rawSpacing) / 16).toFixed(4).replace(".0000", "")}rem`;
};
