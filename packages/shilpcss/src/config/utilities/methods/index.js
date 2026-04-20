import { getProperties } from "@/config/properties/methods";

import { throwError } from "@/lib/logger";

/* ================================================================================================
	CREATE UTILITY OBJECT
================================================================================================ */

/**
 * Creates a utility object from a raw utility string.
 * @param rawUtility - The raw utility string to be processed.
 * @returns An object containing parsed utility information.
 */
export const createUtility = (rawUtility) => {
	//
	let negative = false;
	let value = rawUtility;
	let important = false;
	let variant;

	if (value.startsWith("-")) {
		negative = true;
		value = value.slice(1);
	}

	if (value.endsWith("!")) {
		important = true;
		value = value.slice(0, -1);
	}

	// NOTE: this will only consume the very first "/" and any followings will be removed.
	// `- anything after "/" will be counted as one token.
	//
	// by default, "/" will be considered as part of the utility value.
	// `- below we are seperating it, but this will be joined later while resolving utility.
	//
	// property config explicitely need to add `variant: true` flag to make this count as variant.
	if (value.includes("/")) {
		const [_value, _variant /* , ..._rest */] = value.split("/");
		value = _value;
		variant = _variant;
	}

	return { negative, value, variant, important, raw: rawUtility };
};

/* ================================================================================================
	RESOLVE UTILITIES
================================================================================================ */

/**
 * Resolves utilities and generates CSS based on the provided configuration.
 * @param options - Options for resolving utilities to css properties.
 * @param options.config - The shilp config object.
 * @param options.intentName - The name of the intent to which the utilities belong.
 * @param options.utilities - An array of utility objects to be resolved.
 * @param options.important - Important flag on intent level makes all the utilities important.
 * @returns The generated CSS as a string.
 * @throws If property configuration cannot be resolved or if theme-key is invalid.
 */
export const resolveUtilities = ({
	config,
	intentName,
	utilities,
	important,
}) => {
	//
	let css = "";

	const properties = config.properties[intentName];

	for (let utility of utilities) {
		//

		/* ============================================================================================
			SET IMPORTANT FLAG FOR ALL THE UTILITIES FROM INTENT
		============================================================================================ */

		// if intent is important, make all the utilities important
		if (important) utility.important = true;

		/* ============================================================================================
			FIND PROPERTY CONFIG
		============================================================================================ */

		const tokens = utility.value.split("-");

		let propertyConfig = null; // obj --> { property: "...", values: { ... } };
		let obj = properties;
		let valueTokens = []; // overflow-x-hidden --> ["hidden"]; color-blue-500 --> ["blue", "500"];
		let i = 0;
		let defaultCount = 0;

		// find the property config and set value tokens
		// NOTE: `<=` this will traverse one more level (tokens length + 1) deep to find `DEFAULT`.
		// this prevents nested `DEFAULT`'s (except one)
		while (!propertyConfig && i <= tokens.length) {
			//
			const token = tokens[i];
			let nestedObj = obj[token];

			if (!nestedObj) {
				defaultCount += 1;
				nestedObj = obj["DEFAULT"];
			}

			if (!nestedObj) {
				// atomic error for tokens
				throwError(
					`${intentName.toUpperCase()} -> ${
						tokens[i]
					} doesn't exist in ${utility.raw}`,
				);
			}

			if ("property" in nestedObj) {
				//
				propertyConfig = nestedObj;
				// @text color-blue-500; --> text: { color: { blue: { 500: "..." } } };
				// ["color"] --> property config (i = 0)
				// ["blue", "500"] --> value tokens
				//
				// @flex grow; --> flex: { grow: { DEFAULT: "..." } };
				// ["grow"] --> property config (i = 0)
				// [] --> value tokens
				//
				// @layout overflow-hidden; --> layout: { overflow: { DEFAULT: { ... }, x: { ... }, { y: { ... }} } }
				// ["overflow"] --> no property config (i = 0) --> continue to next iteration
				// ["overflow", "DEFAULT"] --> property config (i = 1)
				// ["hidden"] --> value tokens
				valueTokens = tokens.slice(i + 1 - defaultCount);
				break;
			}

			obj = nestedObj;
			i++;
		}

		/* ============================================================================================
			FIND PROPERTY CONFIG  - THROW EROROR IF NOT FOUND
		============================================================================================ */

		if (!propertyConfig) {
			throwError(
				`${intentName.toUpperCase()} -> property configuration not resolved for ${utility.raw}`,
			);
		}

		/* ============================================================================================
			GET RESOLVED PROPERTY(IES)
		============================================================================================ */

		css += getProperties({
			config,
			propertyConfig,
			intentName,
			utility,
			valueTokens,
		});
	}

	return css;
};
