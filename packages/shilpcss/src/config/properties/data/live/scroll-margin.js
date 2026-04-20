const utilities = {
	// all sides
	m: "scroll-margin: <n><v><i>;",

	// individual
	mt: "scroll-margin-top: <n><v><i>;",
	mr: "scroll-margin-right: <n><v><i>;",
	mb: "scroll-margin-bottom: <n><v><i>;",
	ml: "scroll-margin-left: <n><v><i>;",

	// group
	mx: `
		scroll-margin-left: <n><v><i>;
		scroll-margin-right: <n><v><i>;
	`,
	my: `
		scroll-margin-top: <n><v><i>;
		scroll-margin-bottom: <n><v><i>;
	`,

	// logical
	mbl: "scroll-margin-block: <n><v><i>",
	mbls: "scroll-margin-block-start: <n><v><i>;",
	mble: "scroll-margin-block-end: <n><v><i>;",
	mi: "scroll-margin-inline: <n><v><i>",
	mis: "scroll-margin-inline-start: <n><v><i>;",
	mie: "scroll-margin-inline-end: <n><v><i>;",
};

const scrollMargin = {};

for (let key in utilities) {
	scrollMargin[key] = {
		property: utilities[key],
		resolve: "spacing",
		themeKey: "spacingPixels",
		values: {},
	};
}

export default scrollMargin;
