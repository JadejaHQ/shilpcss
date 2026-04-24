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

	const { metadata, meta, filePath } = await loadDocsModule({
		content,
		slugs,
	});

	const title = metadata.title || meta.title;
	const description = metadata.description || meta.description || "";

	return {
		title,
		description,
		keywords: metadata.keywords || meta.keywords || [],

		alternates: {
			canonical: meta.url,
			types: {
				"text/markdown": `https://raw.githubusercontent.com/JadejaHQ/shilpcss/refs/heads/main/apps/docs/src/content/docs/${filePath}`,
			},
		},

		openGraph: {
			title,
			description,
			url: meta.url,
			type: "article",
			siteName: "Shilp CSS",
			locale: "en_US",
			author: metadata.author || "Pradipsinh Jadeja",
			images: [
				{
					url: "/og.png",
					width: 1200,
					height: 630,
				},
			],
		},

		twitter: {
			title,
			description,
			card: "summary_large_image",
			images: ["/og.png"],
			site: "@shilpcss",
			siteId: "2030301913112285184",
			creator: "@jadeja97_",
			creatorId: "1951893079608160256",
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
