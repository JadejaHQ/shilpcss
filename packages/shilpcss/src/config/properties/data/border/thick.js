const utilities = {
	// all sides
	DEFAULT: "border-width: <v><i>;",

	// individual
	top: "border-top-width: <v><i>;",
	right: "border-right-width: <v><i>;",
	bottom: "border-bottom-width: <v><i>;",
	left: "border-left-width: <v><i>;",

	// group
	x: `
		border-left-width: <v><i>;
		border-right-width: <v><i>;
	`,
	y: `
		border-top-width: <v><i>;
		border-bottom-width: <v><i>;
	`,

	// logical
	bl: "border-block-width: <v><i>;",
	bls: "border-block-start-width: <v><i>;",
	bls: "border-block-start-width: <v><i>;",
	bi: "border-inline-width: <v><i>;",
	bis: "border-inline-start-width: <v><i>;",
	bis: "border-inline-start-width: <v><i>;",

	//// divider - can be created with childs or self mixin
};

const thick = {};

for (let key in utilities) {
	thick[key] = {
		property: utilities[key],
		resolve: "spacing",
		themeKey: "thickness",
		values: {},
	};
}

export default thick;
