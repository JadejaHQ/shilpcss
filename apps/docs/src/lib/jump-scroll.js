/**
 * jump to the element position instead of scrolling or relying on `scrollIntoView`
 */
const jumpScroll = ({ container, element }) => {
	//
	if (!container || !element) return;

	// get co-ordinates and dimentions
	const containerMeta = container.getBoundingClientRect();
	const elMeta = element.getBoundingClientRect();

	const offsetTop = elMeta.top - containerMeta.top;
	const offsetBottom = elMeta.bottom - containerMeta.bottom;

	if (offsetTop < 0 || offsetBottom > 0) {
		container.scrollTop += offsetTop;
	}

	// The below method is not used.
	// when `scrollIntoView` starts, it would pause the main document scroll.

	// const isAbove = elMeta.top < containerMeta.top;
	// const isBelow = elMeta.bottom > containerMeta.bottom;

	// if (isAbove || isBelow) {
	// 	lastElement.scrollIntoView({
	// 		block: "center",
	// 		behavior: "smooth",
	// 	});
	// }
};

/* ============================================================================================= */

export default jumpScroll;
