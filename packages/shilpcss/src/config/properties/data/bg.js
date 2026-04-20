const bg = {
	attachment: {
		property: "background-attachment: <v><i>;",
		values: {
			fixed: "fixed",
			scroll: "scroll",
			local: "local",
		},
	},

	blend: {
		property: "background-blend-mode: <v><i>;",
		themeKey: "blend",
		values: {},
	},

	clip: {
		property: "background-clip: <v><i>;",
		values: {
			border: "border-box",
			padding: "padding-box",
			content: "content-box",
			text: "text",
		},
	},

	color: {
		property: "background-color: <v><i>;",
		resolve: "color",
		themeKey: "colors",
		variant: true,
		values: {},
	},

	gradient: {
		DEFAULT: {
			property: "background-image: <v><i>;",
			values: {},
		},

		linear: {
			property: "background-image: linear-gradient(<v>)<i>;",
			values: {},
		},

		radial: {
			property: "background-image: radial-gradient(<v>)<i>;",
			values: {},
		},

		conic: {
			property: "background-image: conic-gradient(<v>)<i>;",
			values: {},
		},
	},

	img: {
		DEFAULT: {
			property: "background-image: <v><i>;",
			values: {
				none: "none",
			},
		},

		origin: {
			property: "background-origin: <v><i>;",
			values: {
				border: "border-box",
				padding: "padding-box",
				content: "content-box",
			},
		},

		position: {
			DEFAULT: {
				property: "background-position: <v><i>;",
				values: {
					// background-position: x [spacing] [y] [spacing];
					center: "center",
					right: "right",
					left: "left",
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
				},
			},

			x: {
				property: "background-position-x: <v><i>;",
				values: {
					// background-position-x: v [spacing];
				},
			},

			y: {
				property: "background-position-y: <v><i>;",
				values: {
					// background-position-y: v [spacing];
				},
			},
		},

		repeat: {
			property: "background-repeat: <v><i>;",
			values: {
				// background-repeat: v | x y;
				DEFAULT: "repeat",
				none: "no-repeat",
				x: "repeat-x",
				y: "repeat-y",
				space: "space",
				round: "round",
			},
		},

		size: {
			property: "background-size: <v><i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {
				// background-size: v | x y;
				auto: "auto",
				contain: "contain",
				cover: "cover",
			},
		},
	},
};

export default bg;
