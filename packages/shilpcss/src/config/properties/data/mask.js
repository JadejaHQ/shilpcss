const mask = {
	clip: {
		property: "mask-clip: <v><i>;",
		values: {
			border: "border-box",
			content: "content-box",
			padding: "padding-box",
			fill: "fill-box",
			stroke: "stroke-box",
			view: "view-box",
			none: "no-clip",
		},
	},

	combine: {
		property: "mask-composite: <v><i>;",
		values: {
			add: "add",
			subtract: "subtract",
			intersect: "intersect",
			exclude: "exclude",
		},
	},

	gradient: {
		DEFAULT: {
			property: "mask-image: <v><i>;",
			values: {},
		},

		linear: {
			property: "mask-image: linear-gradient(<v>)<i>;",
			values: {},
		},

		radial: {
			property: "mask-image: radial-gradient(<v>)<i>;",
			values: {},
		},

		conic: {
			property: "mask-image: conic-gradient(<v>)<i>;",
			values: {},
		},
	},

	img: {
		property: "mask-image: <v><i>;",
		values: {
			none: "none",
		},
	},

	mode: {
		property: "mask-mode: <v><i>;",
		values: {
			alpha: "alpha",
			luminance: "luminance",
			match: "match-source",
		},
	},

	origin: {
		property: "mask-origin: <v><i>;",
		values: {
			border: "border-box",
			content: "content-box",
			padding: "padding-box",
		},
	},

	position: {
		DEFAULT: {
			property: "mask-position: <v><i>;",
			values: {
				// mask-position: x [spacing] [y] [spacing];
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
			property: "mask-position-x: <v><i>;",
			values: {
				// mask-position-x: v [spacing];
			},
		},

		y: {
			property: "mask-position-y: <v><i>;",
			values: {
				// mask-position-y: v [spacing];
			},
		},
	},

	repeat: {
		property: "mask-repeat: <v><i>;",
		values: {
			// mask-repeat: v | x y;
			DEFAULT: "repeat",
			none: "no-repeat",
			x: "repeat-x",
			y: "repeat-y",
			space: "space",
			round: "round",
		},
	},

	size: {
		property: "mask-size: <v><i>;",
		resolve: "spacing",
		themeKey: "spacing",
		values: {
			// mask-size: v | x y;
			auto: "auto",
			contain: "contain",
			cover: "cover",
		},
	},

	type: {
		property: "mask-type: <v><i>;",
		values: {
			luminance: "luminance",
			alpha: "alpha",
		},
	},
};

export default mask;
