import { SITE_URL } from "@/lib/constants";

import Content from "@/lib/content";
import loadDocsModule from "@/lib/load-docs-module";

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
export const GET = async () => {
	// RSS items from changelog pages
	const items = [];

	// changelog slugs
	const changelogSlugs = content
		.getAllSlugs()
		.filter(({ slugs }) => slugs[0] === "changelog" && slugs.length > 1);

	for (const _slugs of changelogSlugs) {
		const item = await getRSSItemsMeta(_slugs.slugs);
		items.push(item);
	}

	// changelogs sorted by descending date
	const sortedItems = items.sort((a, b) => +b.date - +a.date);

	// Generate RSS XML
	const rss = generateRSSFeed(sortedItems.map(createRSSItem).join("\n"));

	return new Response(rss, {
		headers: {
			"Content-Type": "application/rss+xml; charset=utf-8",
			"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
		},
	});
};

/* ============================================================================================= */

const getRSSItemsMeta = async (slugs) => {
	//
	const { metadata, meta } = await loadDocsModule({
		content,
		slugs,
	});

	return {
		title: metadata.title || meta.title,
		description: metadata.description || meta.description,
		url: `${SITE_URL}${meta.url}/`,
		guid: slugs.join(""),
		date: metadata.date ? new Date(metadata.date) : new Date(),
	};
};

/* ============================================================================================= */

const createRSSItem = ({ title, description, url, guid, date }) => {
	//
	return `
		<item>
			<title>${escapeXML(title || "Untitled")}</title>
			<description>${escapeXML(description ?? `content for ${title}`)}</description>
			<link>${escapeXML(url)}</link>
			<guid>${escapeXML(guid || url)}</guid>
			<pubDate>${date.toUTCString()}</pubDate>
		</item>
	`;
};

/* ============================================================================================= */

/**
 * Generates RSS XML feed
 */
const generateRSSFeed = (items) => {
	//
	const feedDate = new Date().toUTCString();

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Shilp CSS Changelog</title>
		<link>${SITE_URL}/docs/changelog/</link>
		<description>Latest updates and announcements for Shilp CSS</description>
		<language>en-us</language>
		<atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
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
