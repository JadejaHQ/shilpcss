import processMDX from "./src/markdown/lib/process-mdx.js";

import ShilpCSS from "shilpcss/bundlers/webpack";
import shilpConfig from "./shilp.config.js";

/* ============================================================================================= */

/** @type {import('next').NextConfig} */
const nextConfig = {
	//
	reactCompiler: true,
	reactStrictMode: false,
	devIndicators: false,
	output: "export",
	distDir: "dist",
	pageExtensions: ["js", "jsx", "mdx"],

	/* ==============================================================================================
		STATIC HOST SETUP - GITHUB PAGES
	============================================================================================== */

	trailingSlash: true,
	images: {
		unoptimized: true,
	},

	/* ==============================================================================================
		CUSTOMIZE BUNDLER
	============================================================================================== */

	webpack: (config) => {
		//
		config.plugins.push(new ShilpCSS(shilpConfig));

		Object.assign(config.resolve.alias, {
			"@icons": "./src/components/assets/icons.jsx",
			"@": "./src",
		});

		return config;
	},

	/* ==============================================================================================
		EXPERIMENTAL FEATURES
	============================================================================================== */

	experimental: {
		turbopackFileSystemCacheForDev: false,
		turbopackFileSystemCacheForBuild: false,
	},
};

/* ============================================================================================= */

export default processMDX(nextConfig);
