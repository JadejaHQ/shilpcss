import Link from "@/components/link";

import { variants as btnVariants } from "@/components/button";

import { cls } from "@/lib/utils";

import { ChevronLeftIcon, ChevronRightIcon } from "@icons";

/* ============================================================================================= */

const Neighbours = ({ prev, next }) => (
	<div className="page__neighbours">
		{prev && (
			<Link
				className={cls("prev-btn", btnVariants({ variant: "outline" }))}
				href={prev.url}
				title={prev.title}
			>
				<ChevronLeftIcon /> {prev.title}
			</Link>
		)}

		{next && (
			<Link
				className={cls("next-btn", btnVariants({ variant: "outline" }))}
				href={next.url}
				title={next.title}
			>
				{next.title} <ChevronRightIcon />
			</Link>
		)}
	</div>
);

/* ============================================================================================= */

export default Neighbours;
