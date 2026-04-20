import margin from "./space/margin.js";
import padding from "./space/padding.js";

const space = {
	gap: {
		DEFAULT: {
			property: "gap: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {},
		},

		x: {
			property: "column-gap: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {},
		},

		y: {
			property: "row-gap: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {},
		},
	},

	...margin,
	...padding,
};

export default space;
