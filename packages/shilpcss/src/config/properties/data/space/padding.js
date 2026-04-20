const utilities = {
	// all sides
	p: "padding: <n><v><i>;",

	// individual
	pt: "padding-top: <n><v><i>;",
	pr: "padding-right: <n><v><i>;",
	pb: "padding-bottom: <n><v><i>;",
	pl: "padding-left: <n><v><i>;",

	// group
	px: `
		padding-left: <n><v><i>;
		padding-right: <n><v><i>;
	`,
	py: `
		padding-top: <n><v><i>;
		padding-bottom: <n><v><i>;
	`,

	// logical
	pbl: "padding-block: <n><v><i>",
	pbls: "padding-block-start: <n><v><i>;",
	pble: "padding-block-end: <n><v><i>;",
	pi: "padding-inline: <n><v><i>",
	pis: "padding-inline-start: <n><v><i>;",
	pie: "padding-inline-end: <n><v><i>;",
};

const padding = {};

for (let key in utilities) {
	padding[key] = {
		property: utilities[key],
		resolve: "spacing",
		themeKey: "spacingPixels",
		values: {},
	};
}

export default padding;
