import { SITE_URL } from "@/lib/constants";

/* ============================================================================================= */

// to make file run at build time
export const dynamic = "force-static";
export const revalidate = false;

/* ============================================================================================= */

const robots = () => ({
	rules: {
		userAgent: "*",
		allow: "/",
	},

	sitemap: `${SITE_URL}/sitemap.xml`,
});

/* ============================================================================================= */

export default robots;
