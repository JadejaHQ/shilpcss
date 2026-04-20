import { throwError } from "@/lib/logger";
import { isFn } from "@/lib/types";

/* ================================================================================================
	RESOLVE VALUE GETTER METHOD
================================================================================================ */

/**
 * Retrieves a value getter function based on the specified resolver function.
 * @param options - Options for get value resolver.
 * @param options.resolveFn - The resolver function to use. Defaults to "default".
 * @param options.valueResolvers - The list of available, value resolver functions.
 * @param options.errorFn - Optional error handler function to call if the resolver function is not found.
 * @returns The selected value getter function.
 * @throws If the specified resolver function does not exist.
 */
export const getValuesGetterMethod = ({
	resolveFn = "default",
	valueResolvers,
	errorFn,
}) => {
	//
	const fn = valueResolvers[resolveFn];

	if (!isFn(fn)) {
		errorFn?.() ||
			throwError(
				`Value resolver ${resolveFn} does not exist at \`shilpConfig.valueResolvers\``,
			);
	}

	return fn;
};

/* ================================================================================================
	RESOLVE AND RETURN PROPERTY VALUE
================================================================================================ */

/**
 * Retrieves a property value based on the provided property config and resolver.
 * @param options - Options for get property value.
 * @param options.tokens - The value tokens used for property resolution.
 * @param options.resolve - The resolver function to use for value retrieval.
 * @param options.values - The values object containing values object (may be nested).
 * @param options.utility - The utility object containing various flags.
 * @param options.intentName - The name of the intent to which the property belongs.
 * @returns The resolved property value.
 * @throws If the specified resolver function is not found.
 */
export const getPropertyValue = ({
	config,
	tokens,
	resolve = "default",
	values,
	utility,
	intentName,
	propertyConfig,
}) => {
	//

	// get value resolver method
	const getValue = getValuesGetterMethod({
		resolveFn: resolve,
		valueResolvers: config.valueResolvers,
		errorFn: () => {
			throwError(
				`${intentName.toUpperCase()} -> \`${resolve}\` function does not exist for \`${
					utility.raw
				}\` at \`shilpConfig.valueResolvers\`.`,
			);
		},
	});

	// resolve and return property value
	const value = getValue({
		config,
		intentName,
		utility,
		tokens,
		values,
		propertyConfig,
	});

	return value;
};
