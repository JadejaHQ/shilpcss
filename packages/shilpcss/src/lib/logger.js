/**
 * Throws an error with the provided message.
 * @param msg - The error message to throw.
 */
export const throwError = (err) => {
	//
	throw new Error(err);
};

/* ============================================================================================= */

/**
 * Logs a message to the console.
 * @param msg - The message to log.
 */
export const log = (text) => console.log(text);

/* ============================================================================================= */

/**
 * Logs a divider line to the console.
 * @param divider - The character to use for the divider (default is "-").
 * @param n - The number of times to repeat the divider character (default is 50).
 */
export const logDivider = (divider = "-", n = 50) => log(divider.repeat(n));

/* ============================================================================================= */

/**
 * Logs a new line with an optional message to the console.
 * @param msg - The message to include in the new line (optional).
 */
export const logNewLine = (msg) => log(`\n${msg}\n`);

/* ============================================================================================= */

/**
 * Logs a warning message to the console.
 * @param msg - The warning message to log.
 */
export const warn = console.warn;

/* ============================================================================================= */

/**
 * Logs a new line with an optional warning message to the console.
 * @param msg - The warning message to include in the new line (optional).
 */
export const warnNewLine = (msg) => warn(`\n${msg}\n`);
