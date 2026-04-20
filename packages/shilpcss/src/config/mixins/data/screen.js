// https://tailwindcss.com/docs/responsive-design
// https://getbootstrap.com/docs/5.3/layout/breakpoints/

/* ============================================================================================= */

import { throwError } from "@/lib/logger";

/* ================================================================================================
	BREAKPOINTS RANGE
================================================================================================ */

/**
 * Resolves a range breakpoints value from the theme configuration.
 * @param options - Options for getting breakpoint range.
 * @param options.values - Object containing values for breakpoints.
 * @param options.from - The starting breakpoint value.
 * @param options.to - The ending breakpoint value.
 * @param options.raw - The raw value string (e.g., "500px").
 * @returns The resolved media query string for the breakpoint singel or range.
 * @throws If the specified breakpoints are not found in the values.
 */
const getBreakpointRange = ({ values, from, to, raw }) => {
	//
	if (!(from in values)) {
		throwError(
			`SCREEN: \`${from}\` from \`${raw}\` doesn't exist in \`config.theme.screens\``,
		);
	}

	if (!(to in values)) {
		throwError(
			`SCREEN: \`${to}\` from \`${raw}\` doesn't exist in \`config.theme.screens\``,
		);
	}

	const maxWidth = parseInt(values[to]);

	return `@media (min-width: ${values[from]}) and (max-width: ${
		maxWidth - 1
	}px) {`;
};

/* ================================================================================================
	SINGLE BREAKPOINT  - MIN OR MAX
================================================================================================ */

/**
 * Resolves a single breakpoint value from the theme configuration.
 * @param values - The object containing breakpoint values.
 * @param from - The breakpoint name (e.g., "sm", "max-sm").
 * @param raw - The raw selector string containing the breakpoint.
 * @returns The resolved media query string for the breakpoint.
 * @throws If breakpoint not found.
 * @note Handles minimum and maximum breakpoints.
 */
const getSingleBreakpoint = ({ values, from, raw }) => {
	//
	let breakpoint = from;
	let isMax = false;

	if (from.startsWith("max-")) {
		isMax = true;
		breakpoint = from.replace("max-", "");
	}

	if (!(breakpoint in values)) {
		throwError(
			`SCREEN: \`${breakpoint}\` from \`${raw}\` doesn't exist in \`config.theme.screens\``,
		);
	}

	const width = parseInt(values[breakpoint]);

	return `@media (${isMax ? "max" : "min"}-width: ${width - +isMax}px) {`;
};

/* ================================================================================================
	ADD BREAKPOINT STYLES  - SINGLE (MIN OR MAX), RANGE
================================================================================================ */

/**
 * Resolves screen breakpoints.
 * @param config - The configuration object containing theme settings.
 * @param variantName - The name of the variant (e.g., "sm", "md", "max-sm", "md:xl").
 * @param raw - The raw selector string containing the pseudo mixin selector.
 * @returns The resolved breakpoint mixin selector and/or definition.
 * @throws If range breakpoints uses `max-*` breakpoint.
 * @note Handles both single and range breakpoints.
 */
const resolveScreen = ({ config, variantName, raw }) => {
	//
	const values = config.theme.screens;

	// extract from and to breakpoints
	// x:y, max-x
	const [from, to] = variantName.split(":");

	if (from && to && (from.startsWith("max-") || to.startsWith("max-"))) {
		throwError(`SCREEN: \`${raw}\` - range breakpoints must not use 'max-'`);
	}

	return {
		// returning resolved css selector and not the `@mixin` definition
		selector: to
			? getBreakpointRange({ values, from, to, raw })
			: getSingleBreakpoint({ values, from, raw }),
	};
};

/* ================================================================================================
	SCREEN MIXIN CONFIG
================================================================================================ */

const screen = {
	resolve: resolveScreen,
};

/* ============================================================================================= */

export default screen;
