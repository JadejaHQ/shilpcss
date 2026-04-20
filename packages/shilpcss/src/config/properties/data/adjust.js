// transform
const adjust = {
	backside: {
		property: "backface-visibility: <v><i>;",
		values: {
			show: "visible",
			hide: "hidden",
		},
	},

	distance: {
		DEFAULT: {
			property: "--dst: perspective(<v>)<i>;",
			values: {
				none: "none",
				dramatic: "100px",
				near: "300px",
				normal: "500px",
				midrange: "800px",
				distant: "1200px",
			},
		},

		origin: {
			property: "perspective-origin: <n><v><i>;",
			resolve: "rawSpacing",
			themeKey: "spacingPixels",
			values: {
				// perspective-origin: x y;
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
	},

	move: {
		DEFAULT: {
			property: "--mv: translate(<n><v>, <n><v>)<i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {},
		},

		"3d": {
			property: "--mv: translate3d(<n><v>, <n><v>, <n><v>)<i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {},
		},

		x: {
			property: "--mv-x: translateX(<n><v>)<i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {},
		},

		y: {
			property: "--mv-y: translateY(<n><v>)<i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {},
		},

		z: {
			property: "--mv-z: translateZ(<n><v>)<i>;",
			resolve: "spacing",
			themeKey: "spacing",
			values: {},
		},
	},

	origin: {
		property: "transform-origin: <n><v><i>;",
		resolve: "spacing",
		themeKey: "spacingPixels",
		values: {
			// transform-origin: x y;
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

	preset: {
		property: "transform: <v><i>;",
		values: {
			DEFAULT: "var(--trsfm)",
			none: "none",
		},
	},

	rotate: {
		DEFAULT: {
			property: "--rtt: rotate(<n><v>, <n><v>)<i>;",
			themeKey: "angles",
			values: {},
		},

		"3d": {
			property: "--rtt: rotate3d(<n><v>, <n><v>, <n><v>)<i>;",
			themeKey: "angles",
			values: {},
		},

		x: {
			property: "--rtt-x: rotateX(<n><v>)<i>;",
			themeKey: "angles",
			values: {},
		},

		y: {
			property: "--rtt-y: rotateY(<n><v>)<i>;",
			themeKey: "angles",
			values: {},
		},

		z: {
			property: "--rtt-z: rotateZ(<n><v>)<i>;",
			themeKey: "angles",
			values: {},
		},
	},

	scale: {
		DEFAULT: {
			property: "--scl: scale(<n><v>, <n><v>)<i>;",
			themeKey: "fractions",
			values: {
				DEFAULT: "1.1",
			},
		},

		"3d": {
			property: "--scl: scale3d(<n><v>, <n><v>, <n><v>)<i>;",
			themeKey: "fractions",
			values: {
				DEFAULT: "1.1",
			},
		},

		x: {
			property: "--scl-x: scaleX(<n><v>)<i>;",
			themeKey: "fractions",
			values: {
				DEFAULT: "1.1",
			},
		},

		y: {
			property: "--scl-y: scaleY(<n><v>)<i>;",
			themeKey: "fractions",
			values: {
				DEFAULT: "1.1",
			},
		},

		z: {
			property: "--scl-z: scaleZ(<n><v>)<i>;",
			themeKey: "fractions",
			values: {
				DEFAULT: "1.1",
			},
		},
	},

	shape: {
		property: "transform-style: <v><i>;",
		values: {
			"2d": "flat",
			"3d": "preserve-3d",
		},
	},

	skew: {
		DEFAULT: {
			property: "--skw: skew(<n><v>, <n><v>)<i>;",
			themeKey: "angles",
			values: {},
		},

		x: {
			property: "--skw: skewX(<n><v>)<i>;",
			themeKey: "angles",
			values: {},
		},

		y: {
			property: "--skw-y: skewY(<n><v>)<i>;",
			themeKey: "angles",
			values: {},
		},
	},
};

export default adjust;
