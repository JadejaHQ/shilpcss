import { throwError } from "@/lib/logger";
import { isArr, isObj } from "@/lib/types";

/* ============================================================================================= */

/**
 * Recursively merges the properties of the source object into the target object.
 * @param target - The target object to merge into. Must be an object.
 * @param source - The source object to merge from. Must be an object.
 * @throws If either `target` or `source` is not an object.
 * @returns `source` object deep (nested) merge into `target` object.
 */
export const deepMergeObj = (target, source) => {
	//
	if (!isObj(target)) throwError("target must be an object");
	if (!isObj(source)) throwError("source must be an object");

	for (let key in source) {
		//
		if (key in target && isObj(target[key]) && isObj(source[key])) {
			deepMergeObj(target[key], source[key]);
		} else {
			target[key] = source[key];
		}
	}

	return target;
};

/* ============================================================================================= */

/**
 * Creates a deep copy of the given data.
 * @param data - The data to be copied. Can be an object or array.
 * @returns A deep copy of the input data.
 * @throws If any part of the input data is not serializable.
 * @note If the input is not an object or array, the original data is returned.
 */
export const deepCopy = (data) => {
	//
	try {
		//
		if (isObj(data)) return { ...structuredClone(data) };
		else if (isArr(data)) return [...structuredClone(data)];
		else return data;
		//
	} catch (err) {
		throwError("Any part of the input data is not serializable.", err);
	}
};

/* ============================================================================================= */

/**
 * Returns a fresh RegExp instance cloned from the provided input.
 * This ensures the internal `lastIndex` state is reset to `0`,
 * making the regex safe to reuse with stateful flags like `g` or `y`
 * across multiple operations (e.g. `test`, `replace`, `exec`),
 * particularly in long-lived runtimes such as HMR or shared modules.
 *
 * The returned RegExp preserves:
 * - pattern source
 * - flags (g, i, m, s, u, y, d, etc.)
 * @param regex - The RegExp instance to clone.
 * @returns A new RegExp instance with identical pattern and flags.
 * @example
 * - fresh(LCH_COLOR_FORMAT_PATTERN).test(rawColor);
 * - text.replace(fresh(LCH_COLOR_FORMAT_PATTERN), transformer);
 */
export const fresh = (regex) => new RegExp(regex); // reset lastIndex via new instance
