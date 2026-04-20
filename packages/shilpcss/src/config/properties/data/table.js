const table = {
	border: {
		property: "border-collapse: <v><i>;",
		values: {
			collapse: "collapse",
			separate: "separate",
		},
	},

	caption: {
		property: "caption-side: <v><i>;",
		values: {
			top: "top",
			bottom: "bottom",
		},
	},

	gap: {
		property: "border-spacing: <v><i>;",
		resolve: "spacing",
		themeKey: "spacingPixels",
		values: {},
	},

	layout: {
		property: "table-layout: <v><i>;",
		values: {
			auto: "auto",
			fixed: "fixed",
		},
	},
};

export default table;
