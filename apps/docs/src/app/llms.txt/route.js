import { SEARCH_INDEX_PATH, SITE_URL } from "@/lib/constants";

/* ============================================================================================= */

// to make file run at build time
export const dynamic = "force-static";
export const revalidate = false;

/* ============================================================================================= */

/**
 * add `llms.txt` file to public folder at build time
 */
export const GET = () => {
	//

	const body = `# Shilp CSS

> an Intent-first, CSS-centric, styling engine and framework. You compose **intent-based styles inside CSS**, and apply them through named classes like traditional CSS. This keeps HTML semantic, readable, smaller in size, and build styling systems meant to last.

It is designed for engineers, who care, where decisions live, who want styles to
remain understandable years later, and who prefer ownership over convenience.

---

## Docs
${SITE_URL}/docs/

> **These docs are meant to be read, not skimmed.**

### Getting Started

Shilp CSS becomes clear to you, once you understand, where it places
responsibility.

Read docs in following order:

**Basics**:

1. [Why Shilp CSS?](${SITE_URL}/docs/why-shilp-css/)
2. [Mental Model](${SITE_URL}/docs/mental-model/)
3. [Quick Overview](${SITE_URL}/docs/quick-overview/)
4. [Benchmarks](${SITE_URL}/docs/benchmarks/)

**Must Read**:

1. [Credits](${SITE_URL}/docs/credits/)
2. [Status](${SITE_URL}/docs/status/)

Once you’ve read the above, you can [Setup Shilp CSS](${SITE_URL}/docs/setup/) to start
using it in practice, or move on to the other sections to deepen your
understanding.

### Begin Your Journey

- [Core Concepts](${SITE_URL}/docs/core-concepts/): Understand the foundation of Shilp CSS and key ideas for scalable design systems
	 - [Browser Compatibility](${SITE_URL}/docs/browser-compatibility/): Clear and intentional browser compatibility baseline
	 - [Styling With Intent](${SITE_URL}/docs/styling-with-intent/): Styles expressed through a dedicated intent. This keeps related decisions together.
	 - [Colors](${SITE_URL}/docs/colors/): Shilp CSS includes a vast, beautiful color palette out of the box. All the colors are in \`oklch\` format and looks more vivid on supported displays.
	 - [Dark Mode](${SITE_URL}/docs/dark-mode/): Shilp CSS supports **class-based dark mode by default**, with full control over how it is applied and customized.
	 - [Responsive Design](${SITE_URL}/docs/responsive-design/): Shilp CSS provides a small, intentional set of breakpoints and a clear, mobile-first approach to help you handle this cleanly.
	 - [Theming](${SITE_URL}/docs/theming/): Shilp CSS includes a vast, predefined set of default styles that can be used to build beautiful custom design systems. Possibilities are endless with Shilp CSS. From basic colors, fonts to building a component libray or a full design system.
- [Configurations](${SITE_URL}/docs/config/): Deep dive into \`shilp.config.js\`, its structure, customization, and defaults
- [Life Cycle](${SITE_URL}/core/life-cycle/): Learn how Shilp CSS processes and transforms **intent into CSS**
- [Default Styles](${SITE_URL}/docs/default-styles/): Optional default styles provided for a quick start and easier setup
- [Best Practices](${SITE_URL}/docs/best-practices/): Recommendations for writing efficient and maintainable Shilp CSS

---

## Source Content (MDX)

If deeper context or raw content is required, the documentation source files are available at:

https://github.com/JadejaHQ/shilpcss/blob/main/apps/docs/src/content/docs/**/*.mdx

---

## Sitemap
${SITE_URL}/sitemap.xml

---

## Search
${SITE_URL}${SEARCH_INDEX_PATH}

---

## License
https://github.com/JadejaHQ/shilpcss/LICENSE.md

---

Thank you 🫶🏻🫰🏻❤️
`;

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain",
		},
	});
};
