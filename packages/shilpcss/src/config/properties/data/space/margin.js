const utilities = {
	// all sides
	m: "margin: <n><v><i>;",

	// individual
	mt: "margin-top: <n><v><i>;",
	mr: "margin-right: <n><v><i>;",
	mb: "margin-bottom: <n><v><i>;",
	ml: "margin-left: <n><v><i>;",

	// group
	mx: `
		margin-left: <n><v><i>;
		margin-right: <n><v><i>;
	`,
	my: `
		margin-top: <n><v><i>;
		margin-bottom: <n><v><i>;
	`,

	// logical
	mbl: "margin-block: <n><v><i>",
	mbls: "margin-block-start: <n><v><i>;",
	mble: "margin-block-end: <n><v><i>;",
	mi: "margin-inline: <n><v><i>",
	mis: "margin-inline-start: <n><v><i>;",
	mie: "margin-inline-end: <n><v><i>;",
};

const margin = {};

for (let key in utilities) {
	margin[key] = {
		property: utilities[key],
		resolve: "spacing",
		themeKey: "spacingPixels",
		values: {},
	};
}

export default margin;
