import { startTransition, useRef, useEffect, useState } from "react";

/* ============================================================================================= */

const useScrollSpy = ({ tocIds, scrollContainer, offset }) => {
	//
	const observer = useRef();

	const [activeIds, setActiveIds] = useState([]);

	// when the `useScollSpy` is ran for the first time,
	// TOC dom is not built. Need a manual initialization.
	// explored the `mutationObserver`, but this is the simplest way.
	const [start, setStart] = useState(false);

	// handle active ids
	const handleActiveIds = (entries) => {
		startTransition(() => {
			setActiveIds((prev) => {
				const ids = new Set(prev);

				entries.forEach((entry) => {
					ids[entry.isIntersecting ? "add" : "delete"](entry.target.id);
				});

				return Array.from(ids);
			});
		});
	};

	// initalize the observer
	const initObserver = (container) => {
		//
		const elements = tocIds
			// if using `#${id}` to query, and `id` starts with number, it will throw error
			// using `id` as attribute to prevent issue
			.map((id) => container.querySelector(`[id="${id}"]`))
			.filter(Boolean);

		if (!elements.length) return;

		observer.current = new IntersectionObserver(handleActiveIds, {
			// scroll container
			root: container,
			// margin for observer (top right bottom left)
			rootMargin: `-${offset || 0}px 0px 0px 0px`,
			// visible part of the element to detect intersection
			threshold: 0.1,
		});

		elements.forEach((el) => observer.current?.observe(el));
	};

	// remove the observer instance
	const disconnect = () => {
		observer.current?.disconnect();
		observer.current = null;
	};

	// handle observer instance in-relation to component life-cycle
	useEffect(() => {
		// remove the previous instance
		disconnect();

		// start the observation only if dom is ready
		if (start) {
			const container = document.querySelector(scrollContainer);

			if (container && tocIds.length) {
				initObserver(container);
			}
		}

		return () => {
			disconnect();
		};
	}, [start, tocIds, scrollContainer, offset]);

	return { activeIds, initialize: () => setStart(true) };
};

/* ============================================================================================= */

export default useScrollSpy;
