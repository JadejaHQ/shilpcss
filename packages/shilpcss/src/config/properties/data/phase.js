// transition
const phase = {
	delay: {
		property: "transition-delay: <v><i>;",
		themeKey: "time",
		values: {},
	},

	duration: {
		property: "transition-duration: <v><i>;",
		themeKey: "time",
		values: {},
	},

	flow: {
		property: "transition-timing-function: <v><i>;",
		themeKey: "flow",
		values: {},
	},

	for: {
		property: "transition-property: <v><i>;",
		values: {
			all: "all",
			properties: "var(--trnst-pprts)",
			colors: "var(--trnst-clrs)",
			filters: "var(--trnst-fltrs)",
			adjust: "transform",
			opacity: "opacity",
			shadow: "box-shadow",
		},
	},

	preset: {
		property: "transition: <v><i>;",
		values: {
			none: "none",
			// transition: property duration [flow] [delay];
		},
	},
};

export default phase;
