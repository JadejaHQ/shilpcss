import { throwError } from "@/lib/logger";
import { isObj } from "@/lib/types";

/* ============================================================================================= */

/**
 * Retrieves the value based on the provided configuration.
 * @param options - Options for getting raw value.
 * @param options.values - The values object containing resolved values (may be nested).
 * @param options.tokens - The value tokens used for property resolution.
 * @param options.utility - The utility object containing raw value and other flags.
 * @param options.intentName - The name of the intent to which the property belongs.
 * @throws If the utility cannot be resolved to value.
 * @returns The resolved value.
 * @note This is a default function to get value, if value resolver not specified.
 */
export const getDefaultValue = ({ values, tokens, utility, intentName }) => {
	//
	let value = "";

	let obj = values;
	let i = 0;

	while (!value && i <= tokens.length) {
		//
		const token = tokens[i];
		let nestedObj = obj[token] ?? obj["DEFAULT"];

		if (!nestedObj && nestedObj !== 0) {
			//

			// NOTE: here utility.raw is `"theme(...)"` string
			if (utility.raw.includes("theme") && utility.raw.includes("color")) {
				//
				nestedObj = obj[500];
				//
			} else {
				//
				break;
			}
		}

		if (!isObj(nestedObj)) {
			value = nestedObj;
			break;
		}

		obj = nestedObj;
		i++;
	}

	if (!value && value !== 0) {
		throwError(`${intentName.toUpperCase()} -> ${utility.raw} not resolved!`);
	}

	return value;
};
