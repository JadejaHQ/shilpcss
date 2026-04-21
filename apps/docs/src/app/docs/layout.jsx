import Topics from "@/components/docs/topics";
import ScrollToActiveTopic from "@/components/docs/scroll-to-active-topic";

import Content from "@/lib/content";
import { SITE_URL } from "@/lib/constants";

/* ============================================================================================= */

// docs content info
const content = new Content("src/content", "docs");

/* ============================================================================================= */

export const metadata = {
	alternates: {
		canonical: "/docs",
		types: {
			"text/plain": `${SITE_URL}/llms.txt`,
		},
	},
};

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
