/**
 * load `mdx` file as module with additional information
 */
const loadDocsModule = async ({ content, slugs }) => {
	// get current page info
	const { filePath, meta, index } = content.getFileInfo(slugs);

	// get previous and next page info
	const neighbours = content.getNeighbours(index);

	// dynamically import `.mdx` file as module
	const {
		default: MDXComponent,
		metadata,
		toc,
	} = await import(`@/content/docs/${filePath}`);

	return {
		filePath,
		meta,
		index,
		neighbours,
		MDXComponent,
		metadata,
		toc,
	};
};

/* ============================================================================================= */

export default loadDocsModule;
