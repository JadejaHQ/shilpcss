const grid = {
	col: {
		start: {
			property: "grid-column-start: <v><i>;",
			themeKey: "range",
			values: {},
		},

		end: {
			property: "grid-column-end: <v><i>;",
			themeKey: "range",
			values: {
				13: 13,
			},
		},

		size: {
			property: "grid-auto-columns: <v><i>;",
			values: {
				auto: "auto",
				min: "min-content",
				max: "max-content",
				fraction: "minmax(0, 1fr)",
			},
		},

		span: {
			property: "grid-column: <v><i>;",
			themeKey: "span",
			values: {},
		},
	},

	cols: {
		property: "grid-template-columns: <v><i>;",
		themeKey: "amount",
		values: {},
	},

	content: {
		property: "align-content: <v><i>;",
		values: {
			start: "start",
			center: "center",
			end: "end",
			stretch: "stretch",
			between: "space-between",
			around: "space-around",
			evenly: "space-evenly",
		},
	},

	flow: {
		property: "grid-auto-flow: <v><i>;",
		values: {
			row: {
				DEFAULT: "row",
				dense: "row dense",
			},
			col: {
				DEFAULT: "column",
				dense: "column dense",
			},
		},
	},

	items: {
		property: "align-items: <v><i>;",
		values: {
			start: "start",
			center: "center",
			end: "end",
			stretch: "stretch",
			baseline: "baseline",
		},
	},

	justify: {
		DEFAULT: {
			property: "justify-content: <v><i>;",
			values: {
				start: "start",
				center: "center",
				end: "end",
				stretch: "stretch",
				between: "space-between",
				around: "space-around",
				evenly: "space-evenly",
			},
		},

		items: {
			property: "justify-items: <v><i>;",
			values: {
				start: "start",
				center: "center",
				end: "end",
				stretch: "stretch",
			},
		},

		self: {
			property: "justify-self: <v><i>;",
			values: {
				start: "start",
				center: "center",
				end: "end",
				stretch: "stretch",
			},
		},
	},

	order: {
		property: "order: <n><v><i>;",
		themeKey: "order",
		values: {},
	},

	place: {
		DEFAULT: {
			property: "place-content: <v><i>;",
			values: {
				start: "start",
				center: "center",
				end: "end",
				stretch: "stretch",
				between: "space-between",
				around: "space-around",
				evenly: "space-evenly",
			},
		},

		items: {
			property: "place-items: <v><i>;",
			values: {
				start: "start",
				center: "center",
				end: "end",
				stretch: "stretch",
			},
		},

		self: {
			property: "place-self: <v><i>;",
			values: {
				start: "start",
				center: "center",
				end: "end",
				stretch: "stretch",
			},
		},
	},

	preset: {
		property: "grid: <v><i>;",
		values: {
			none: "none",
		},
	},

	row: {
		start: {
			property: "grid-row-start: <v><i>;",
			themeKey: "range",
			values: {},
		},

		end: {
			property: "grid-row-end: <v><i>;",
			themeKey: "range",
			values: {
				13: 13,
			},
		},

		size: {
			property: "grid-auto-rows: <v><i>;",
			values: {
				auto: "auto",
				min: "min-content",
				max: "max-content",
				fraction: "minmax(0, 1fr)",
			},
		},

		span: {
			property: "grid-row: <v><i>;",
			themeKey: "span",
			values: {},
		},
	},

	rows: {
		property: "grid-template-rows: <v><i>;",
		themeKey: "amount",
		values: {},
	},

	self: {
		property: "align-self: <v><i>;",
		values: {
			start: "start",
			center: "center",
			end: "end",
			stretch: "stretch",
			baseline: "baseline",
		},
	},
};

export default grid;
