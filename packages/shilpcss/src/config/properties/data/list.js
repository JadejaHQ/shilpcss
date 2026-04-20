const list = {
	align: {
		property: "list-style-position: <v><i>;",
		values: {
			marker: "inside",
			text: "outside",
		},
	},

	marker: {
		property: "list-style-type: <v><i>;",
		values: {
			// default
			plain: "none",
			dot: "disc",
			circle: "circle",
			square: "square",
			greek: "lower-greek",
			devanagari: "devanagari",
			gujarati: "gujarati",
			number: {
				DEFAULT: "decimal",
				"leading-zero": "decimal-leading-zero",
			},
			roman: {
				lower: "lower-roman",
				DEFAULT: "upper-roman",
			},
			alpha: {
				DEFAULT: "lower-alpha, lower-latin",
				upper: "upper-alpha, upper-latin",
			},

			// unicode, emoji
			hyphen: `"-"`,
			chevron: {
				DEFAULT: `"›"`,
				double: `"»"`,
			},
			target: `"☉"`,
			arrow: `"➤"`,
			star: `"★"`,
			heart: `"♥"`,
			check: `"✓"`,
			asterisk: `"∗"`,
		},
	},
};

export default list;
