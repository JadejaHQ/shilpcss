const svg = {
	fill: {
		DEFAULT: {
			property: "fill: <v><i>;",
			resolve: "color",
			themeKey: "colors",
			variant: true,
			values: {},
		},

		opacity: {
			property: "fill-opacity: <v><i>;",
			themeKey: "fractions",
			values: {},
		},
	},

	stroke: {
		DEFAULT: {
			property: "stroke-width: <v><i>;",
			resolve: "spacing",
			values: {
				0: "0px",
				0.5: "0.5px",
				1: "1px",
				1.5: "1.5px",
				2: "2px",
			},
		},

		color: {
			property: "stroke: <v><i>;",
			resolve: "color",
			themeKey: "colors",
			variant: true,
			values: {},
		},

		opacity: {
			property: "stroke-opacity: <v><i>;",
			themeKey: "fractions",
			values: {},
		},

		scale: {
			property: "vector-effect: <v><i>;",
			values: {
				DEFAULT: "none",
				none: "non-scaling-stroke",
			},
		},
	},
};

export default svg;
