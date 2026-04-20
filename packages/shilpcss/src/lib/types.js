/**
 * Checks if the provided data is a string.
 * @param arg - The data to check.
 * @returns `true` if the data is a string, otherwise `false`.
 */
export const isStr = (arg) => typeof arg === "string";

/* ============================================================================================= */

/**
 * Checks if the provided data is a function.
 * @param arg - The data to check.
 * @returns `true` if the data is a function, otherwise `false`.
 */
export const isFn = (arg) => typeof arg === "function";

/* ============================================================================================= */

/**
 * Checks if the provided data is an array.
 * @param arg - The data to check.
 * @returns `true` if the data is an array, otherwise `false`.
 */
export const isArr = (arg) => Array.isArray(arg);

/* ============================================================================================= */

/**
 * Checks if the provided data is an object (not an array, or null).
 * @param arg - The data to check.
 * @returns `true` if the data is an object, otherwise `false`.
 */
export const isObj = (arg) => {
	//
	return !!arg && typeof arg === "object" && !isArr(arg);
};
