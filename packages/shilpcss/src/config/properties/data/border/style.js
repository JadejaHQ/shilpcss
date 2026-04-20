const utilities = {
	// all sides
	DEFAULT: "border-style: <v><i>;",

	// individual
	top: "border-top-style: <v><i>;",
	right: "border-right-style: <v><i>;",
	bottom: "border-bottom-style: <v><i>;",
	left: "border-left-style: <v><i>;",

	// group
	x: `
		border-left-style: <v><i>;
		border-right-style: <v><i>;
	`,
	y: `
		border-top-style: <v><i>;
		border-bottom-style: <v><i>;
	`,

	// logical
	bl: "border-block-style: <v><i>;",
	bls: "border-block-start-style: <v><i>;",
	bls: "border-block-start-style: <v><i>;",
	bi: "border-inline-style: <v><i>;",
	bis: "border-inline-start-style: <v><i>;",
	bis: "border-inline-start-style: <v><i>;",

	//// divider - can be created with childs or self mixin
};

const style = {};

for (let key in utilities) {
	style[key] = {
		property: utilities[key],
		themeKey: "style",
		values: {},
	};
}

export default style;
