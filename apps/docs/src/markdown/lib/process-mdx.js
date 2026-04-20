import createMDX from "@next/mdx";

/* remark plugins */
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";
import remarkTOC from "../plugins/remark-toc.js";
import remarkCodeMeta from "../plugins/remark-code-meta.js";

/* rehype plugins */
import rehypeSlug from "rehype-slug";

/* ============================================================================================= */

/**
 * Configures the MDX parser with Markdown and HTML processing plugins.
 */
const processMDX = createMDX({
	options: {
		/* process markdown */
		remarkPlugins: [
			remarkFrontmatter,
			// named export `metadata` from `.mdx` files
			[remarkMdxFrontmatter, { name: "metadata" }],
			remarkGfm,
			remarkCodeMeta,
			remarkTOC,
		],

		/* process html */
		rehypePlugins: [rehypeSlug],
	},
});

/* ============================================================================================= */

export default processMDX;
