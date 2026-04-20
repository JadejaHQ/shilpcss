const text = {
	align: {
		x: {
			property: "text-align: <v><i>;",
			values: {
				left: "left",
				right: "right",
				center: "center",
				justify: "justify",
				start: "start",
				end: "end",
			},
		},

		y: {
			property: "vertical-align: <v><i>;",
			values: {
				baseline: "baseline",
				top: "top",
				middle: "middle",
				bottom: "bottom",
				to: {
					top: "text-top",
					bottom: "text-bottom",
				},
				sub: "sub",
				sup: "sup",
			},
		},
	},

	break: {
		all: {
			property: "word-break: <v><i>;",
			values: {
				DEFAULT: "break-all",
			},
		},

		anywhere: {
			property: "overflow-wrap: <v><i>;",
			values: {
				DEFAULT: "anywhere",
			},
		},

		hyphen: {
			property: "hyphens: <v><i>;",
			values: {
				DEFAULT: "auto", // suggestion: "&shy;"
			},
		},

		keep: {
			property: "word-break: <v><i>;",
			values: {
				DEFAULT: "keep-all",
			},
		},

		normal: {
			property: "<v>",
			special: true,
			values: {
				DEFAULT: `
					overflow-wrap: normal<i>;
					word-break: normal<i>;
				`,
				unset: `
					overflow-wrap: unset<i>;
					word-break: unset<i>;
				`,
			},
		},

		word: {
			property: "overflow-wrap: <v><i>;",
			values: {
				DEFAULT: "break-word",
			},
		},

		spaces: {
			property: "white-space: <v><i>;",
			values: {
				DEFAULT: "break-spaces",
			},
		},
	},

	case: {
		property: "text-transform: <v><i>;",
		values: {
			lower: "lowercase",
			upper: "uppercase",
			capitalize: "capitalize",
			normal: "none",
		},
	},

	color: {
		property: "color: <v><i>;",
		resolve: "color",
		themeKey: "colors",
		variant: true,
		values: {},
	},

	content: {
		property: "content: <v><i>;",
		values: {
			empty: "",
			none: "none",
		},
	},

	family: {
		property: "font-family: <v><i>;",
		values: {
			display: "var(--font-display)",
			body: "var(--font-body)",
			code: "var(--font-code)",
		},
	},

	gap: {
		DEFAULT: {
			property: "letter-spacing: <n><v><i>;",
			resolve: "spacing",
			values: {
				normal: "normal",
				DEFAULT: "0.0125em",
				md: "0.025em",
				lg: "0.05em",
				xl: "0.1em",
				0: 0,
				1: "1px",
				2: "2px",
				3: "3px",
				4: "4px",
				6: "6px",
				8: "8px",
			},
		},

		word: {
			property: "word-spacing: <n><v><i>;",
			resolve: "spacing",
			values: {
				normal: "normal",
				DEFAULT: "0.0125em",
				md: "0.025em",
				lg: "0.05em",
				xl: "0.1em",
				0: 0,
				1: "1px",
				2: "2px",
				3: "3px",
				4: "4px",
				6: "6px",
				8: "8px",
			},
		},
	},

	h: {
		property: "line-height: <v><i>;",
		values: {
			normal: 1,
			xs: 1.25,
			sm: 1.375,
			base: 1.5,
			md: 1.625,
			lg: 1.75,
			xl: 2,
		},
	},

	line: {
		is: {
			property: "text-decoration-line: <v><i>;",
			values: {
				under: "underline",
				over: "overline",
				strike: "line-through",
				none: "none",
			},
		},

		thick: {
			property: "text-decoration-thickness: <v><i>;",
			resolve: "spacing",
			themeKey: "thickness",
			values: {
				auto: "auto",
				as: {
					text: "from-font",
				},
			},
		},

		style: {
			property: "text-decoration-style: <v><i>;",
			values: {
				solid: "solid",
				double: "double",
				dotted: "dotted",
				dashed: "dashed",
				wavy: "wavy",
			},
		},

		color: {
			property: "text-decoration-color: <v><i>;",
			resolve: "color",
			themeKey: "colors",
			variant: true,
			values: {},
		},

		offset: {
			property: "text-underline-offset: <n><v><i>;",
			resolve: "spacing",
			themeKey: "thickness",
			values: {
				auto: "auto",
			},
		},
	},

	lines: {
		DEFAULT: {
			property: "--lines: <v><i>;",
			values: {
				1: 1,
				2: 2,
				3: 3,
				4: 4,
			},
		},

		all: {
			property: "<v>",
			special: true,
			values: {
				visible: `
					overflow: visible<i>;
					display: block<i>;
					-webkit-box-orient: horizontal<i>;
					--lines: none<i>;
				`,
				unset: `
					overflow: unset<i>;
					display: unset<i>;
					-webkit-box-orient: unset<i>;
					--lines: unset<i>;
				`,
			},
		},
	},

	move: {
		property: "text-indent: <n><v><i>;",
		resolve: "spacing",
		themeKey: "spacingPixels",
		values: {},
	},

	nums: {
		property: "font-variant-numeric: <v><i>;",
		values: {
			// font-variant-numeric: [ordinal] [slashed zero] [figure] [spacing] [fractional];
			normal: "normal", // reset
			ordinal: "ordinal",
			slashed: {
				zero: "slashed-zero",
			},
			// figure
			lining: "lining-nums",
			old: {
				style: "oldstyle-nums",
			},
			// spacing
			proportional: "proportional-nums",
			tabular: "tabular-nums",
			// fractional
			diagonal: "diagonal-fractions",
			stacked: "stacked-fractions",
		},
	},

	overflow: {
		DEFAULT: {
			property: "text-overflow: <v><i>;",
			values: {
				ellipsis: "ellipsis",
				clip: "clip",
			},
		},

		truncate: {
			property: "<v>",
			special: true,
			values: {
				DEFAULT: `
					overflow: hidden<i>;
					text-overflow: ellipsis<i>;
					white-space: nowrap<i>;
				`,
				unset: `
					overflow: unset<i>;
					text-overflow: unset<i>;
					white-space: unset<i>;
				`,
			},
		},
	},

	shadow: {
		DEFAULT: {
			property: "text-shadow: <v><i>;",
			values: {
				none: "0 0 #0000",
				"2xs": "var(--t-sdw-2xs)",
				xs: "var(--t-sdw-xs)",
				sm: "var(--t-sdw-sm)",
				DEFAULT: "var(--t-sdw-sm)",
				md: "var(--t-sdw-md)",
				lg: "var(--t-sdw-lg)",
				xl: "var(--t-sdw-xl)",
			},
		},

		color: {
			property: "--t-sdw-clr: <v><i>;",
			resolve: "color",
			themeKey: "colors",
			variant: true,
			values: {},
		},
	},

	size: {
		property: "font-size: <v><i>;",
		resolve: "spacing",
		values: {
			xs: "12px",
			sm: "14px",
			base: "16px",
			md: "18px",
			lg: "20px",
			xl: "22px",
			"2xl": "24px",
			"3xl": "28px",
			"4xl": "32px",
			"5xl": "36px",
			"6xl": "40px",
			"7xl": "48px",
			h1: "var(--h1)",
			h2: "var(--h2)",
			h3: "var(--h3)",
			h4: "var(--h4)",
			h5: "var(--h5)",
			h6: "var(--h6)",
		},
	},

	space: {
		property: "white-space: <v><i>;",
		values: {
			normal: "normal",
			nowrap: "nowrap",
			pre: {
				DEFAULT: "pre",
				line: "pre-line",
				wrap: "pre-wrap",
			},
		},
	},

	style: {
		property: "font-style: <v><i>;",
		values: {
			normal: "normal",
			italic: "italic",
		},
	},

	thick: {
		property: "font-weight: <v><i>;",
		values: {
			100: 100,
			200: 200,
			300: 300,
			400: 400,
			500: 500,
			600: 600,
			700: 700,
			800: 800,
			900: 900,
		},
	},
};

export default text;
