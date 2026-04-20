"use client";

import { usePathname, useRouter } from "next/navigation";

/* ============================================================================================= */

const Headings = ({ as: Component, ...rest }) => {
	//
	const pathname = usePathname();
	const router = useRouter();

	const handleClick = () => {
		//
		if (!rest.id) return;

		// new page navigation must start from top (scroll position `0`)
		router.push(`${pathname}#${rest.id}`, { scroll: true });
	};

	return <Component {...rest} onClick={handleClick} />;
};

/* ============================================================================================= */

export default Headings;
