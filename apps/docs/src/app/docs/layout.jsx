import Topics from "@/components/docs/topics";
import ScrollToActiveTopic from "@/components/docs/scroll-to-active-topic";

import Content from "@/lib/content";

/* ============================================================================================= */

// docs content info
const content = new Content("src/content", "docs");

/* ============================================================================================= */

const DocsLayout = async ({ children }) => (
	<div id="docs" className="container">
		{/*  */}

		<div className="topics__wrapper--desktop scroll-fade">
			<Topics tree={content.getTree()} />
			<ScrollToActiveTopic />
		</div>

		{children}
	</div>
);

/* ============================================================================================= */

export default DocsLayout;
