const size = {
	h: {
		property: "height: <v><i>;",
		resolve: "spacing",
		themeKey: "spacing",
		values: {
			min: "min-content",
			max: "max-content",
			fit: "fit-content",
			screen: "100vh",
		},
	},

	is: {
		DEFAULT: {
			property: `
				width: <v><i>;
				height: <v><i>;
			`,
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				min: "min-content",
				max: "max-content",
				fit: "fit-content",
			},
		},

		block: {
			property: "block-size: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				min: "min-content",
				max: "max-content",
				fit: "fit-content",
			},
		},

		inline: {
			property: "inline-size: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				min: "min-content",
				max: "max-content",
				fit: "fit-content",
			},
		},
	},

	max: {
		DEFAULT: {
			property: `
				max-width: <v><i>;
				max-height: <v><i>;
			`,
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				min: "min-content",
				max: "max-content",
				fit: "fit-content",
			},
		},

		block: {
			property: "max-block-size: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				min: "min-content",
				max: "max-content",
				fit: "fit-content",
			},
		},

		h: {
			property: "max-height: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				min: "min-content",
				max: "max-content",
				fit: "fit-content",
				screen: "100vh",
			},
		},

		inline: {
			property: "max-inline-size: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				min: "min-content",
				max: "max-content",
				fit: "fit-content",
			},
		},

		w: {
			property: "max-width: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				min: "min-content",
				max: "max-content",
				fit: "fit-content",
				screen: "100vw",
				stretch: "stretch",
				xs: "320px",
				sm: "384px",
				md: "448px",
				lg: "512px",
				xl: "576px",
				"2xl": "672px",
				"3xl": "768px",
				"4xl": "896px",
				"5xl": "1024px",
				"6xl": "1152px",
				"7xl": "1280px",
				"8xl": "1440px",
				"9xl": "1920px",
			},
		},
	},

	min: {
		DEFAULT: {
			property: `
				min-width: <v><i>;
				min-height: <v><i>;
			`,
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				min: "min-content",
				max: "max-content",
				fit: "fit-content",
			},
		},

		block: {
			property: "min-block-size: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				min: "min-content",
				max: "max-content",
				fit: "fit-content",
			},
		},

		h: {
			property: "min-height: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				min: "min-content",
				max: "max-content",
				fit: "fit-content",
				screen: "100vh",
			},
		},

		inline: {
			property: "min-inline-size: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				min: "min-content",
				max: "max-content",
				fit: "fit-content",
			},
		},

		w: {
			property: "min-width: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				min: "min-content",
				max: "max-content",
				fit: "fit-content",
				screen: "100vw",
				stretch: "stretch",
			},
		},
	},

	w: {
		property: "width: <v><i>;",
		resolve: "spacing",
		themeKey: "spacing",
		values: {
			min: "min-content",
			max: "max-content",
			fit: "fit-content",
			screen: "100vw",
			stretch: "stretch",
		},
	},
};

export default size;
