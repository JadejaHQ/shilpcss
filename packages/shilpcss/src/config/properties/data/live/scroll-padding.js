const utilities = {
	// all sides
	p: "scroll-padding: <n><v><i>;",

	// individual
	pt: "scroll-padding-top: <n><v><i>;",
	pr: "scroll-padding-right: <n><v><i>;",
	pb: "scroll-padding-bottom: <n><v><i>;",
	pl: "scroll-padding-left: <n><v><i>;",

	// group
	px: `
		scroll-padding-left: <n><v><i>;
		scroll-padding-right: <n><v><i>;
	`,
	py: `
		scroll-padding-top: <n><v><i>;
		scroll-padding-bottom: <n><v><i>;
	`,

	// logical
	pbl: "scroll-padding-block: <n><v><i>",
	pbls: "scroll-padding-block-start: <n><v><i>;",
	pble: "scroll-padding-block-end: <n><v><i>;",
	pi: "scroll-padding-inline: <n><v><i>",
	pis: "scroll-padding-inline-start: <n><v><i>;",
	pie: "scroll-padding-inline-end: <n><v><i>;",
};

const scrollPadding = {};

for (let key in utilities) {
	scrollPadding[key] = {
		property: utilities[key],
		resolve: "spacing",
		themeKey: "spacingPixels",
		values: {},
	};
}

export default scrollPadding;
