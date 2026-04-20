/* ============================================================================================= */

// to make file run at build time
export const dynamic = "force-static";
export const revalidate = false;

/* ============================================================================================= */

const manifest = () => ({
	name: "Shilp CSS",
	short_name: "Shilp CSS",
	description: "an Intent-first, CSS-centric, styling engine and framework",
	start_url: "/",
	display: "standalone",
	background_color: "#9333ea",
	theme_color: "#9333ea",
	icons: [
		{
			src: "/favicon.ico",
			sizes: "64x64",
			type: "image/x-icon",
		},
	],
});

/* ============================================================================================= */

export default manifest;
