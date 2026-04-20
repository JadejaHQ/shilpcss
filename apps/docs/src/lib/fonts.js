import {
	Bitter as DisplayFont,
	Inter as BodyFont,
	Intel_One_Mono as CodeFont,
} from "next/font/google";

/* ============================================================================================= */

export const display = DisplayFont({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	style: ["italic", "normal"],
	preload: true,
	variable: "--user-font-display",
});

/* ============================================================================================= */

export const body = BodyFont({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	style: ["italic", "normal"],
	preload: true,
	variable: "--user-font-body",
});

/* ============================================================================================= */

export const code = CodeFont({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	style: ["italic", "normal"],
	preload: true,
	adjustFontFallback: false,
	variable: "--user-font-code",
});
