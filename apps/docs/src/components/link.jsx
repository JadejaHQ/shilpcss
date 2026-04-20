"use client";

/* ============================================================================================= */

import { default as NextLink } from "next/link";
import { usePathname } from "next/navigation";

/* ============================================================================================= */

const Link = ({ href, navLink, ...rest }) => {
	//
	const pathname = usePathname();

	// open external link in new tab
	const handleExternalLink = () => {
		const attrs = { href };

		if (href.startsWith("https://")) {
			attrs.rel = "noopener noreferrer";
			attrs.target = "_blank";
		}

		return attrs;
	};

	// add `data-active` attr to active url
	const handleActiveLink = () => {
		//
		if (rest["data-active"]) return;

		let isActive = pathname === href;

		if (navLink) isActive = pathname.includes(href);

		return { "data-active": (isActive && href !== "/") || undefined };
	};

	return (
		<NextLink
			scroll={true} // new page navigation start from top
			{...rest}
			{...handleExternalLink()}
			{...handleActiveLink()}
		/>
	);
};

/* ============================================================================================= */

export default Link;
