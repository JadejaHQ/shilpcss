/**
 * put the app to sleep for defined time for artificial delay to improve the UX
 */
const sleep = (time = 250) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, time);
	});
};

export default sleep;
