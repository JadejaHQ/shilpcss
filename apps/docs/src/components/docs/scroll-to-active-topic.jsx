"use client";

/* ============================================================================================= */

import { useEffect, startTransition } from "react";

import jumpScroll from "@/lib/jump-scroll";

/* ============================================================================================= */

const ScrollToActiveTopic = ({ isMobile = false }) => {
	//
	useEffect(() => {
		startTransition(() => {
			//
			const container = document.querySelector(
				`.topics__wrapper--${isMobile ? "mobile" : "desktop"}`,
			);
			const activeElements = container.querySelector(`[data-active]`);

			jumpScroll({
				container,
				element: activeElements,
			});
		});
	}, []);

	return null;
};

/* ============================================================================================= */

export default ScrollToActiveTopic;
