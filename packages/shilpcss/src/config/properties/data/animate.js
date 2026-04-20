// animation
const animate = {
	delay: {
		property: "animation-delay: <n><v><i>;",
		themeKey: "time",
		values: {},
	},

	direction: {
		property: "animation-direction: <v><i>;",
		values: {
			normal: "normal", // from -> to
			reverse: "reverse", // to -> from
			boomerang: "alternate-reverse", // from -> to -> from
			strikeback: "alternate", // to -> from -> to
		},
	},

	duration: {
		property: "animation-duration: <v><i>;",
		themeKey: "time",
		values: {
			auto: "auto",
		},
	},

	enter: {
		property: "<v>",
		special: true,
		values: {
			DEFAULT: `
				animation-name: enter<i>;
				animation-duration: 0.25s<i>;
			`,
			unset: `
				--entr-opct: unset<i>;
				--entr-scl: unset<i>;
				--entr-rtt: unset<i>;
				--entr-mv-x: unset<i>;
				--entr-mv-y: unset<i>;
			`,
		},
	},

	exit: {
		property: "<v>",
		special: true,
		values: {
			DEFAULT: `
				animation-name: exit<i>;
				animation-duration: 0.25s<i>;
			`,
			unset: `
				--ext-opct: unset<i>;
				--ext-scl: unset<i>;
				--ext-rtt: unset<i>;
				--ext-mv-x: unset<i>;
				--ext-mv-y: unset<i>;
			`,
		},
	},

	fade: {
		in: {
			property: "--entr-opct: <v><i>;",
			themeKey: "fractions",
			values: {
				DEFAULT: 1,
			},
		},

		out: {
			property: "--ext-opct: <v><i>;",
			themeKey: "fractions",
			values: {
				DEFAULT: 1,
			},
		},
	},

	flow: {
		property: "animation-timing-function: <v><i>;",
		themeKey: "flow",
		values: {
			linear: "linear",
		},
	},

	loop: {
		property: "animation-iteration-count: <v><i>;",
		values: {
			infinite: "infinite",
			none: "none",
			1: 1,
			2: 2,
			3: 3,
			4: 4,
		},
	},

	mode: {
		property: "animation-fill-mode: <v><i>;",
		values: {
			backward: "backwards",
			forward: "forwards",
			both: "both",
			none: "none",
		},
	},

	name: {
		property: "animation-name: <v><i>;",
		values: {
			enter: {
				DEFAULT: "enter",
				exit: "enter, exit",
			},
			exit: "exit",
		},
	},

	preset: {
		property: "animation: <v><i>;",
		values: {
			// animation: name [duration] [flow] [delay] [loop] [path] [mode] [state];
			none: "none",
			spin: "spin 1s linear infinite",
			ping: `ping 1s theme(flow-ease-out) infinite`,
			pulse: `pulse 2s theme(flow-pulse) infinite`,
			bounce: "bounce 1s infinite",
			wiggle: "wiggle 1s theme(flow-ease-in-out) infinite",
		},
	},

	slide: {
		in: {
			from: {
				top: {
					property: "--entr-mv-y: -<v><i>;",
					themeKey: "spacing",
					resolve: "spacing",
					values: {
						DEFAULT: "100%",
					},
				},

				bottom: {
					property: "--entr-mv-y: <v><i>;",
					themeKey: "spacing",
					resolve: "spacing",
					values: {
						DEFAULT: "100%",
					},
				},

				left: {
					property: "--entr-mv-x: -<v><i>;",
					themeKey: "spacing",
					resolve: "spacing",
					values: {
						DEFAULT: "100%",
					},
				},

				right: {
					property: "--entr-mv-x: <v><i>;",
					themeKey: "spacing",
					resolve: "spacing",
					values: {
						DEFAULT: "100%",
					},
				},
			},
		},

		out: {
			to: {
				top: {
					property: "--ext-mv-y: -<v><i>;",
					themeKey: "spacing",
					resolve: "spacing",
					values: {
						DEFAULT: "100%",
					},
				},

				bottom: {
					property: "--ext-mv-y: <v><i>;",
					themeKey: "spacing",
					resolve: "spacing",
					values: {
						DEFAULT: "100%",
					},
				},

				left: {
					property: "--ext-mv-x: -<v><i>;",
					themeKey: "spacing",
					resolve: "spacing",
					values: {
						DEFAULT: "100%",
					},
				},

				right: {
					property: "--ext-mv-x: <v><i>;",
					themeKey: "spacing",
					resolve: "spacing",
					values: {
						DEFAULT: "100%",
					},
				},
			},
		},
	},

	spin: {
		in: {
			property: "--entr-rtt: <n><v><i>;",
			themeKey: "angles",
			values: {
				DEFAULT: "0deg",
			},
		},

		out: {
			property: "--ext-rtt: <n><v><i>;",
			themeKey: "angles",
			values: {
				DEFAULT: "0deg",
			},
		},
	},

	state: {
		property: "animation-play-state: <v><i>;",
		values: {
			paused: "paused",
			playing: "running",
		},
	},

	zoom: {
		in: {
			property: "--entr-scl: <n><v><i>;",
			themeKey: "fractions",
			values: {
				DEFAULT: 1,
			},
		},

		out: {
			property: "--ext-scl: <n><v><i>;",
			themeKey: "fractions",
			values: {
				DEFAULT: 1,
			},
		},
	},
};

export default animate;
