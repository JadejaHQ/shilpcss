const text = {
	variants: {
		// "first-letter": "&::first-letter",
		// "first-line": "&::first-line",

		// NOTE: Safari support is limited to color and font-size.
		// use `list-style-type` for custom marker
		// can also use intent `@list marker-*;`
		marker: "&::marker",

		// NOTE: Safari iOS doesn't support this.
		// selection: "&::selection",

		// writing style
		rtl: `[dir="rtl"] &`,
		ltr: `[dir="ltr"] &`,
	},
};

export default text;
