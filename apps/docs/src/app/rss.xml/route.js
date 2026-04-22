import { SITE_URL } from "@/lib/constants";

import Content from "@/lib/content";

/* ============================================================================================= */

// docs content info
const content = new Content("src/content", "docs");

/* ============================================================================================= */

// to make file run at build time
export const dynamic = "force-static";
export const revalidate = false;

/* ============================================================================================= */

/**
 * Generates RSS feed for documentation updates
 */
export const GET = () => {
	//
	const slugs = content.getAllSlugs();

	const pages = [
		{
			title: "Work With Me",
			description:
				"Work with the creator of Shilp CSS, an open-source CSS engine and framework. He is available for frontend engineering, architecture, consulting, product collaboration, and sponsorship for Shilp CSS.",
			url: `${SITE_URL}/work-with-me/`,
			guid: "work-with-me",
		},
	];

	// Build RSS items from all doc pages
	const items = slugs.map(({ slugs }) => {
		//
		const { meta } = content.getFileInfo(slugs);

		return createRSSItem({
			title: meta.title,
			url: `${SITE_URL}${meta.url}/`,
			guid: slugs.join(""),
		});
	});

	// Generate RSS XML
	const rss = generateRSSFeed(
		pages
			.map((page) => createRSSItem(page))
			.concat(items)
			.join("\n"),
	);

	return new Response(rss, {
		headers: {
			"Content-Type": "application/rss+xml; charset=utf-8",
			"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
		},
	});
};

/* ============================================================================================= */

const createRSSItem = ({ title, description, url, guid }) => {
	//
	return `
  <item>
    <title>${escapeXML(title)}</title>
    <description>${escapeXML(description ?? `content for ${title}`)}</description>
    <link>${escapeXML(url)}</link>
    <guid>${escapeXML(guid || url)}</guid>
    <pubDate>${new Date().toUTCString()}</pubDate>
  </item>`;
};

/* ============================================================================================= */

/**
 * Generates RSS XML feed
 */
const generateRSSFeed = (items) => {
	//
	const feedDate = new Date().toUTCString();

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
	<channel>
		<title>Shilp CSS</title>
		<link>${SITE_URL}</link>
		<description>an Intent-first, CSS-centric, styling engine and framework</description>
		<language>en-us</language>
		<lastBuildDate>${feedDate}</lastBuildDate>
		<ttl>3600</ttl>

    ${items}

	</channel>
</rss>`;
};

/* ============================================================================================= */

/**
 * Escapes XML special characters
 */
const escapeXML = (str) => {
	//
	if (!str) return "";

	return String(str)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
};
