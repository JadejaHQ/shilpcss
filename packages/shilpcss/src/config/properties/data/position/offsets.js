const utilities = {
	// individual
	top: "top: <n><v><i>;",
	right: "right: <n><v><i>;",
	bottom: "bottom: <n><v><i>;",
	left: "left: <n><v><i>;",

	// group
	x: `
		left: <n><v><i>;
		right: <n><v><i>;
	`,
	y: `
		top: <n><v><i>;
		bottom: <n><v><i>;
	`,
};

const offsets = {
	inset: {
		// all sides
		DEFAULT: {
			property: "inset: <n><v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {},
		},

		block: {
			DEFAULT: {
				property: "inset-block: <n><v><i>;",
				resolve: "spacing",
				themeKey: "spacing",
				values: {},
			},

			end: {
				property: "inset-block-end: <n><v><i>;",
				resolve: "spacing",
				themeKey: "spacing",
				values: {},
			},

			start: {
				property: "inset-block-start: <n><v><i>;",
				resolve: "spacing",
				themeKey: "spacing",
				values: {},
			},
		},

		inline: {
			DEFAULT: {
				property: "inset-inline: <n><v><i>;",
				resolve: "spacing",
				themeKey: "spacing",
				values: {},
			},

			end: {
				property: "inset-inline-end: <n><v><i>;",
				resolve: "spacing",
				themeKey: "spacing",
				values: {},
			},

			start: {
				property: "inset-inline-start: <n><v><i>;",
				resolve: "spacing",
				themeKey: "spacing",
				values: {},
			},
		},
	},
};

for (let key in utilities) {
	offsets[key] = {
		property: utilities[key],
		resolve: "spacing",
		themeKey: "spacing",
		values: {},
	};
}

export default offsets;
