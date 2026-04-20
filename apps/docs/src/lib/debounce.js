// global variable for this module instance
let timer;

/**
 * prevent duplicate function call in specified time period
 */
const debounce = (fn, delay = 1000) => {
	//
	clearTimeout(timer);

	timer = setTimeout(() => {
		fn();
		clearTimeout(timer);
	}, delay);
};

/* ============================================================================================= */

export default debounce;
