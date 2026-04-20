import { visit } from "unist-util-visit";
import GithubSlugger from "github-slugger";

/* ============================================================================================= */

/**
 * Remark plugin to export table of content (toc) from `.mdx` files
 */
const remarkTOC = () => {
	return (tree) => {
		const slugger = new GithubSlugger();
		const toc = [];

		visit(tree, "heading", (node) => {
			const text = node.children
				.filter((n) => n.type === "text")
				.map((n) => n.value)
				.join("");

			toc.push({
				level: node.depth,
				text,
				id: slugger.slug(text),
			});
		});

		/** Prevent XSS
		 *
		 * If a heading somehow contains: `## </script><script>alert(1)</script>`
		 *
		 * This will convert:
		 * - `<` to `\u003c`
		 * - `>` to `\u003e`
		 */
		const safeStr = JSON.stringify(toc)
			.replace(new RegExp(/</g), "\\u003c")
			.replace(new RegExp(/>/g), "\\u003e");

		// export toc from `.mdx` files
		tree.children.push({
			type: "mdxjsEsm",
			// NOTE: with `value`, `toc` is not exported. throwing error.
			// value: `export const toc = ${safeStr};`,
			data: {
				estree: {
					type: "Program",
					sourceType: "module",
					body: [
						{
							type: "ExportNamedDeclaration",
							declaration: {
								type: "VariableDeclaration",
								kind: "const",
								declarations: [
									{
										type: "VariableDeclarator",
										id: { type: "Identifier", name: "toc" },
										init: {
											type: "Literal",
											value: JSON.parse(safeStr),
											raw: safeStr,
										},
									},
								],
							},
							specifiers: [],
							source: null,
						},
					],
				},
			},
		});
	};
};

/* ============================================================================================= */

export default remarkTOC;
