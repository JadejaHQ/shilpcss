const flex = {
	base: {
		property: "flex-basis: <v><i>;",
		resolve: "spacing",
		themeKey: "spacing",
		values: {},
	},

	content: {
		property: "align-content: <v><i>;",
		values: {
			start: "flex-start",
			center: "center",
			end: "flex-end",
			stretch: "stretch",
			between: "space-between",
			around: "space-around",
			evenly: "space-evenly",
		},
	},

	flow: {
		property: "flex-direction: <v><i>;",
		values: {
			row: {
				DEFAULT: "row",
				reverse: "row-reverse",
			},
			col: {
				DEFAULT: "column",
				reverse: "column-reverse",
			},
		},
	},

	grow: {
		property: "flex-grow: <v><i>;",
		values: {
			DEFAULT: 1,
			0: 0,
		},
	},

	items: {
		property: "align-items: <v><i>;",
		values: {
			start: "flex-start",
			center: "center",
			end: "flex-end",
			stretch: "stretch",
			baseline: "baseline",
		},
	},

	justify: {
		property: "justify-content: <v><i>;",
		values: {
			start: "flex-start",
			center: "center",
			end: "flex-end",
			between: "space-between",
			around: "space-around",
			evenly: "space-evenly",
		},
	},

	order: {
		property: "order: <n><v><i>;",
		themeKey: "order",
		values: {},
	},

	place: {
		property: "place-content: <v><i>;",
		values: {
			start: "flex-start",
			center: "center",
			end: "flex-end",
			between: "space-between",
			around: "space-around",
			evenly: "space-evenly",
			stretch: "stretch",
		},
	},

	preset: {
		property: "flex: <v><i>;",
		values: {
			// flex: [grow] [shrink] [basis];
			1: "1 1 0%",
			auto: "1 1 auto",
			initial: "0 1 auto",
			none: "none",
		},
	},

	self: {
		property: "align-self: <v><i>;",
		values: {
			start: "flex-start",
			center: "center",
			end: "flex-end",
			stretch: "stretch",
			baseline: "baseline",
		},
	},

	shrink: {
		property: "flex-shrink: <v><i>;",
		values: {
			DEFAULT: 1,
			0: 0,
		},
	},

	wrap: {
		property: "flex-wrap: <v><i>;",
		values: {
			DEFAULT: "wrap",
			reverse: "wrap-reverse",
			none: "nowrap",
		},
	},
};

export default flex;
