import offsets from "./position/offsets.js";

const position = {
	is: {
		property: "position: <v><i>;",
		values: {
			static: "static",
			fixed: "fixed",
			absolute: "absolute",
			relative: "relative",
			sticky: "sticky",
		},
	},

	...offsets,
};

export default position;
