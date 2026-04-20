import { transform, browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";

import { isStr } from "@/lib/types";

/* ============================================================================================= */

/**
 * Convert LCH string to RGB string
 * @param obj - Object with LCH values (can be nested).
 * @returns Object with RGB value (structure same as original).
 */
export const lchToRgb = (obj) => {
	//
	const output = {};

	// OKLCH string "0-100% 0-1 0-255" → RGB string "0–255 0-255 0-255"
	const transpile = (str) => {
		const { code } = transform({
			code: Buffer.from(str),
			minify: true,
			targets: browserslistToTargets(browserslist("since 2012-01-31")),
		});

		return code
			?.toString()
			.split("rgba(")[1]
			.split(");")[0]
			.split(",")
			.slice(0, 3)
			.join(" ");
	};

	const nested = (src, dest) => {
		Object.entries(src).forEach(([key, val]) => {
			if (isStr(val)) {
				dest[key] = transpile(`body { color: oklch(${val} / 0.9); }`);
			} else {
				dest[key] = {};
				nested(val, dest[key]);
			}
		});
	};

	nested(obj, output);

	return output;
};
