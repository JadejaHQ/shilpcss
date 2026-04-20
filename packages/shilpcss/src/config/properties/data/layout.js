const layout = {
	blend: {
		property: "mix-blend-mode: <v><i>;",
		themeKey: "blend",
		values: {},
	},

	box: {
		property: "box-sizing: <v><i>;",
		values: {
			border: "border-box",
			content: "content-box",
		},
	},

	float: {
		DEFAULT: {
			property: "float: <v><i>;",
			values: {
				left: "left",
				right: "right",
				none: "none",
			},
		},

		clear: {
			property: "clear: <v><i>;",
			values: {
				left: "left",
				right: "right",
				none: "none",
				both: "both",
			},
		},
	},

	hide: {
		property: "visibility: <v><i>;",
		values: {
			DEFAULT: "hidden",
		},
	},

	is: {
		property: "display: <v><i>;",
		values: {
			hidden: "none",
			block: "block",
			flex: "flex",
			grid: "grid",

			// inline
			inline: {
				DEFAULT: "inline",
				block: "inline-block",
				flex: "inline-flex",
				grid: "inline-grid",
				table: "inline-table",
			},

			// table
			table: {
				DEFAULT: "table",
				head: "table-header-group",
				body: "table-row-group",
				footer: "table-footer-group",
				row: "table-row",
				column: {
					DEFAULT: "table-column",
					group: "table-column-group",
				},
				cell: "table-cell",
				caption: "table-caption",
			},

			// list
			list: {
				item: "list-item",
			},
		},
	},

	isolate: {
		property: "isolation: <v><i>;",
		values: {
			auto: "auto",
			forced: "isolate",
		},
	},

	layer: {
		property: "z-index: <n><v><i>;",
		values: {
			auto: "auto",
			base: 0,
			1: 1,
			2: 2,
			3: 3,
			4: 4,
			5: 5,
			6: 6,
			7: 7,
			8: 8,
			9: 9,
			10: 10,
			11: 11,
			12: 12,
		},
	},

	object: {
		fit: {
			property: "object-fit: <v><i>;",
			values: {
				none: "none",
				contain: "contain",
				cover: "cover",
				fit: "fit",
				scale: {
					down: "scale-down",
				},
			},
		},

		position: {
			property: "object-position: <v><i>;",
			values: {
				top: {
					DEFAULT: "top",
					left: "left top",
					right: "right top",
				},
				bottom: {
					DEFAULT: "bottom",
					left: "left bottom",
					right: "right bottom",
				},
				left: "left",
				right: "right",
				center: "center",
			},
		},
	},

	opacity: {
		property: "opacity: <v><i>;",
		themeKey: "fractions",
		values: {},
	},

	overflow: {
		DEFAULT: {
			property: "overflow: <v><i>;",
			values: {
				auto: "auto",
				visible: "visible",
				hidden: "hidden",
				scroll: "scroll",
			},
		},

		x: {
			property: "overflow-x: <v><i>;",
			values: {
				auto: "auto",
				visible: "visible",
				hidden: "hidden",
				scroll: "scroll",
			},
		},

		y: {
			property: "overflow-y: <v><i>;",
			values: {
				auto: "auto",
				visible: "visible",
				hidden: "hidden",
				scroll: "scroll",
			},
		},
	},

	ratio: {
		property: "aspect-ratio: <v><i>;",
		values: {
			auto: "auto",
			square: "1/1",
			video: "16/9",

			photo: {
				DEFAULT: "4/3",
				wide: "5/4",
				wider: "3/2",
				widest: "16/9",
			},

			cinema: {
				DEFAULT: "1.85/1",
				wide: "2.39/1",
				"70mm": "2.76/1",
			},

			display: {
				DEFAULT: "16/9",
				tall: "16/10",
				wide: "18/9",
				wider: "19.5/9",
				widest: "21/9",
			},
		},
	},

	shadow: {
		DEFAULT: {
			property: "<v>",
			special: true,
			values: {
				none: `
					box-shadow: 0 0 #0000<i>;
					--b-sdw: initial<i>;
				`,
				"2xs": `
					box-shadow: var(--bx-sdw)<i>;
					--b-sdw: var(--b-sdw-2xs)<i>;
				`,
				xs: `
					box-shadow: var(--bx-sdw)<i>;
					--b-sdw: var(--b-sdw-xs)<i>;
				`,
				sm: `
					box-shadow: var(--bx-sdw)<i>;
					--b-sdw: var(--b-sdw-sm)<i>;
				`,
				DEFAULT: `
					box-shadow: var(--bx-sdw)<i>;
					--b-sdw: var(--b-sdw-sm)<i>;
				`,
				md: `
					box-shadow: var(--bx-sdw)<i>;
					--b-sdw: var(--b-sdw-md)<i>;
				`,
				lg: `
					box-shadow: var(--bx-sdw)<i>;
					--b-sdw: var(--b-sdw-lg)<i>;
				`,
				xl: `
					box-shadow: var(--bx-sdw)<i>;
					--b-sdw: var(--b-sdw-xl)<i>;
				`,
				"2xl": `
					box-shadow: var(--bx-sdw)<i>;
					--b-sdw: var(--b-sdw-2xl)<i>;
				`,
			},
		},

		inset: {
			property: "--in-sdw: <v><i>;",
			values: {
				DEFAULT: "inset",
				none: "unset",
			},
		},

		color: {
			property: "--b-sdw-clr: <v><i>;",
			resolve: "color",
			themeKey: "colors",
			variant: true,
			values: {},
		},
	},

	show: {
		property: "visibility: <v><i>;",
		values: {
			DEFAULT: "visible",
		},
	},

	theme: {
		property: "color-scheme: <v><i>;",
		values: {
			normal: "normal",
			auto: "light dark",
			dark: "dark",
			light: "light",
			only: {
				light: "only light",
				dark: "only dark",
			},
		},
	},
};

export default layout;
