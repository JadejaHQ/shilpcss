"use client";

/* ============================================================================================= */

import { useEffect, useState } from "react";

/* ============================================================================================= */

/**
 * Avoid hidration mismatch with client component
 *
 * https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch
 */
const Client = ({ children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return children;
};

/* ============================================================================================= */

export default Client;
