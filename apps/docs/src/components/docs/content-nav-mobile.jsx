import {
	SheetContent,
	SheetHeader,
	SheetRoot,
	SheetTitle,
	SheetTrigger,
} from "@/components/sheet";

import Button from "@/components/button";
import Topics from "@/components/docs/topics";
import TOC from "@/components/docs/toc";
import ScrollToActiveTopic from "@/components/docs/scroll-to-active-topic";

/* ============================================================================================= */

const ContentNavMobile = ({ topics, toc }) => {
	return (
		<div className="content-nav__wrapper--mobile">
			<div className="content-nav container">
				<MobileTopics topics={topics} />
				<MobileTOC toc={toc} />
			</div>
		</div>
	);
};

/* ============================================================================================= */

const MobileTopics = ({ topics }) => (
	<SheetRoot>
		<SheetTrigger render={<Button variant="ghost" />}>Topics</SheetTrigger>
		<SheetContent
			side="left"
			hideCloseButton={false}
			className="content-nav__topics-content"
		>
			<SheetHeader>
				<SheetTitle>Topics</SheetTitle>
			</SheetHeader>

			<div className="topics__wrapper--mobile scroll-fade">
				<Topics tree={topics} />
				<ScrollToActiveTopic isMobile />
			</div>
		</SheetContent>
	</SheetRoot>
);
/* ============================================================================================= */

const MobileTOC = ({ toc }) => (
	<SheetRoot>
		<SheetTrigger render={<Button variant="ghost" />}>
			On This Page
		</SheetTrigger>
		<SheetContent
			side="right"
			hideCloseButton={false}
			className="content-nav__toc-content"
		>
			<SheetHeader>
				<SheetTitle>On This Page</SheetTitle>
			</SheetHeader>

			<div className="toc__wrapper--mobile scroll-fade">
				<TOC toc={toc} isMobile />
			</div>
		</SheetContent>
	</SheetRoot>
);

/* ============================================================================================= */

export default ContentNavMobile;
