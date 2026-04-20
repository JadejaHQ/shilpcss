import Separator from "@/components/separator";
import Neighbours from "@/components/docs/neighbours";
import TOC from "@/components/docs/toc";
import ContentNavMobile from "@/components/docs/content-nav-mobile";

import Content from "@/lib/content";
import loadDocsModule from "@/lib/load-docs-module";

/* ============================================================================================= */

// docs content info
const content = new Content("src/content", "docs");

/* ============================================================================================= */

// by marking dynamicParams as false,
// accessing a path not defined in `generateStaticParams` will 404
export const dynamicParams = false;

// generate all paths at build time
export const generateStaticParams = () => {
	return content.getAllSlugs();
};

/* ============================================================================================= */

export const generateMetadata = async ({ params }) => {
	//
	const { slugs = [] } = await params;

	const { metadata, meta } = await loadDocsModule({
		content,
		slugs,
	});

	return {
		title: metadata.title || meta.title,
		description: metadata.description || meta.description || "",

		alternates: {
			canonical: meta.url,
		},

		openGraph: {
			title: metadata.title || meta.title,
			description: metadata.description || meta.description || "",
			url: meta.url,
			type: "article",
		},
	};
};

/* ============================================================================================= */

const DocPage = async ({ params }) => {
	// determine slug array
	// empty string in array is `/docs` page
	const { slugs = [] } = await params;

	const { MDXComponent, toc, neighbours } = await loadDocsModule({
		content,
		slugs,
	});

	return (
		<>
			<div className="content__wrapper">
				{/* mobile navigation */}
				<ContentNavMobile topics={content.getTree()} toc={toc} />

				{/* render mdx contetn */}
				<main>
					<article className="typography">
						<MDXComponent />
					</article>

					<Separator />

					<Neighbours {...neighbours} />
				</main>
			</div>

			{/* table of content (list actually) */}
			<aside className="toc__wrapper--desktop scroll-fade">
				<TOC toc={toc} />
			</aside>
		</>
	);
};

/* ============================================================================================= */

export default DocPage;
