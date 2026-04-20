const filter = {
	blur: {
		property: "filter: blur(<v>)<i>;",
		resolve: "spacing",
		themeKey: "blur",
		values: {},
	},

	bright: {
		property: "filter: brightness(<v>)<i>;",
		themeKey: "fractions",
		values: {},
	},

	contrast: {
		property: "filter: contrast(<v>)<i>;",
		themeKey: "fractions",
		values: {},
	},

	gray: {
		property: "filter: grayscale(<v>)<i>;",
		themeKey: "fractions",
		values: {},
	},

	hue: {
		property: "filter: hue-rotate(<v>)<i>;",
		themeKey: "angles",
		values: {},
	},

	invert: {
		property: "filter: invert(<v>)<i>;",
		values: {
			DEFAULT: 1,
			none: 0,
		},
	},

	opacity: {
		property: "filter: opacity(<v>)<i>;",
		themeKey: "fractions",
		values: {},
	},

	saturate: {
		property: "filter: saturate(<v>)<i>;",
		themeKey: "fractions",
		values: {},
	},

	sepia: {
		property: "filter: sepia(<v>)<i>;",
		themeKey: "fractions",
		values: {},
	},

	shadow: {
		DEFAULT: {
			property: "filter: drop-shadow(<v>)<i>;",
			values: {
				none: "0 0 #0000",
				xs: "var(--d-sdw-xs)",
				sm: "var(--d-sdw-sm)",
				DEFAULT: "var(--d-sdw-sm)",
				md: "var(--d-sdw-md)",
				lg: "var(--d-sdw-lg)",
				xl: "var(--d-sdw-xl)",
				"2xl": "var(--d-sdw-2xl)",
			},
		},

		color: {
			property: "--d-sdw-clr: <v><i>;",
			resolve: "color",
			themeKey: "colors",
			variant: true,
			values: {},
		},
	},

	preset: {
		property: "filter: <v><i>;",
		values: {
			// filter: [blur] [brightness] [contrast] [drop-shadow] [grayscale] [hue-rotate] [invert] [opacity] [saturate] [sepia];
		},
	},

	backdrop: {
		DEFAULT: {
			property: "backdrop-filter: <v><i>;",
			values: {
				// backdrop-filter: [blur] [brightness] [contrast] [drop-shadow] [grayscale] [hue-rotate] [invert] [opacity] [saturate] [sepia];
			},
		},

		blur: {
			property: "backdrop-filter: blur(<v>)<i>;",
			resolve: "spacing",
			themeKey: "blur",
			values: {},
		},

		bright: {
			property: "backdrop-filter: brightness(<v>)<i>;",
			themeKey: "fractions",
			values: {},
		},

		contrast: {
			property: "backdrop-filter: contrast(<v>)<i>;",
			themeKey: "fractions",
			values: {},
		},

		gray: {
			property: "backdrop-filter: grayscale(<v>)<i>;",
			themeKey: "fractions",
			values: {},
		},

		hue: {
			property: "backdrop-filter: hue-rotate(<v>)<i>;",
			themeKey: "angles",
			values: {},
		},

		invert: {
			property: "backdrop-filter: invert(<v>)<i>;",
			values: {
				DEFAULT: 1,
				none: 0,
			},
		},

		opacity: {
			property: "backdrop-filter: opacity(<v>)<i>;",
			themeKey: "fractions",
			values: {},
		},

		saturate: {
			property: "backdrop-filter: saturate(<v>)<i>;",
			themeKey: "fractions",
			values: {},
		},

		sepia: {
			property: "backdrop-filter: sepia(<v>)<i>;",
			themeKey: "fractions",
			values: {},
		},

		shadow: {
			DEFAULT: {
				property: "backdrop-filter: drop-shadow(<v>)<i>;",
				values: {
					none: "0 0 #0000",
					xs: "var(--bd-sdw-xs)",
					sm: "var(--bd-sdw-sm)",
					DEFAULT: "var(--bd-sdw-sm)",
					md: "var(--bd-sdw-md)",
					lg: "var(--bd-sdw-lg)",
					xl: "var(--bd-sdw-xl)",
					"2xl": "var(--bd-sdw-2xl)",
				},
			},

			color: {
				property: "--bd-sdw-clr: <v><i>;",
				resolve: "color",
				themeKey: "colors",
				variant: true,
				values: {},
			},
		},
	},
};

export default filter;
