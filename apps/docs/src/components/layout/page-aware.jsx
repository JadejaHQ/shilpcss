"use client";

/* ============================================================================================= */

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/* ============================================================================================= */

const addDataAttrToHTML = (pathname) => {
	//
	const path = pathname.split("#")[0].split("?")[0];

	const html = document.documentElement;

	// trailing slash added for github pages,
	// so we need to remove it for normal path
	const isTrailingSlash = path.endsWith("/");

	html.setAttribute(
		"data-path",
		(isTrailingSlash ? path.slice(0, -1) : path) || "/",
	);
	html.setAttribute("data-root", path.split("/")[1] || "home");
	//
};

/* ============================================================================================= */

/**
 * adds `data-page` attr to html on initial load (before dom paint)
 */
export const Routing = () => {
	//
	const pathname = usePathname();

	useLayoutEffect(() => {
		//
		addDataAttrToHTML(pathname);
		//
	}, [pathname]);

	return null;
};

/* ============================================================================================= */

/**
 * adds `data-page` attr to html on client navigation (before dom paint)
 */
export const InitialLoad = () => (
	<script
		dangerouslySetInnerHTML={{
			__html: `
				(function(pathname, addDataAttrToHTML) {
					//
					addDataAttrToHTML(pathname);
					//
				})(location.pathname, ${addDataAttrToHTML})
			`,
		}}
	/>
);
