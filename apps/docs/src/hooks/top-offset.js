import { useEffect, useState } from "react";

/* ============================================================================================= */

/**
 * get top offset for the main content by calulating sticky layouts
 * it handles screen resize as well
 *
 * sticky layouts are:
 * 1. banner
 * 2. header
 * 3. mobile navigation for docs (topics and toc)
 */
const useGetTopOffset = () => {
	//
	const [topOffset, setTopOffset] = useState(0);

	// handle resize to return accurate top offset
	const handleResize = () => {
		const bannerWrapper = document.querySelector(".banner__wrapper");
		const headerWrapper = document.querySelector(".header__wrapper");
		const contentNavWrapper = document.querySelector(
			".content-nav__wrapper--mobile",
		);

		const bannerHeight = bannerWrapper
			? getComputedStyle(bannerWrapper).height
			: 0;
		const headerHeight = headerWrapper
			? getComputedStyle(headerWrapper).height
			: 0;
		const contentNavHeight = contentNavWrapper
			? getComputedStyle(contentNavWrapper).height
			: 0;

		setTopOffset(
			parseFloat(bannerHeight) +
				parseFloat(headerHeight) +
				parseFloat(contentNavHeight),
		);
	};

	// 1. get initial top offset
	// 2. get top offset when screen resizes
	useEffect(() => {
		// call on first mount
		!topOffset && handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	return topOffset;
};

/* ============================================================================================= */

export default useGetTopOffset;
