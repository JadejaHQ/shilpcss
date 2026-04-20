const border = {
	// --radius: 4px
	// NOTE: unit of `--radius` wiil be inferred, px --> px, rem --> rem
	radius: {
		0: 0,
		// NOTE: small radius can be added manually
		DEFAULT: "var(--radius)", // 4px
		md: "calc(var(--radius) * 1.5)", // 6px
		lg: "calc(var(--radius) * 2)", // 8px
		xl: "calc(var(--radius) * 3)", // 12px
		// NOTE: always fully rounded untill explicitely set to 0
		full: "calc(infinity * 1px)",
	},

	style: {
		none: "none",
		hidden: "hidden",
		dashed: "dashed",
		dotted: "dotted",
		solid: "solid",
		double: "double",
		groove: "groove",
		ridge: "ridge",
		inset: "inset",
		outset: "outset",
	},

	thickness: {
		0: 0,
		DEFAULT: "1px",
		px: "1px",
		2: "2px",
		3: "3px",
		4: "4px",
	},
};

export default border;
