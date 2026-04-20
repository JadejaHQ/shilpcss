import scrollMargin from "./live/scroll-margin.js";
import scrollPadding from "./live/scroll-padding.js";

const live = {
	caret: {
		property: "caret-color: <v><i>;",
		resolve: "color",
		themeKey: "colors",
		variant: true,
		values: {
			auto: "auto",
		},
	},

	cursor: {
		property: "cursor: <v><i>;",
		values: {
			// general
			auto: "auto",
			default: "default",
			none: "none",

			// link & status
			menu: "context-menu",
			help: "help",
			pointer: "pointer",
			wait: "wait",
			progress: "progress",

			// selection
			cell: "cell",
			target: "crosshair",
			text: "text",
			vertical: "vertical-text",

			// drag & drop
			alias: "alias",
			copy: "copy",
			move: "move",
			no: {
				drop: "no-drop",
			},
			not: {
				allowed: "not-allowed",
			},
			grab: "grab",
			grabbing: "grabbing",

			// scroll
			scroll: "all-scroll",

			// zoom
			zoom: {
				in: "zoom-in",
				out: "zoom-out",
			},

			// resize
			resize: {
				col: "col-resize",
				row: "row-resize",
				top: {
					DEFAULT: "n-resize",
					right: "ne-resize",
					left: "nw-resize",
				},
				bottom: {
					DEFAULT: "s-resize",
					right: "se-resize",
					left: "sw-resize",
				},
				right: "e-resize",
				left: "w-resize",
				y: "ns-resize",
				x: "ew-resize",
				diagonal: {
					forward: "nesw-resize",
					backward: "nwse-resize",
				},
			},
		},
	},

	events: {
		property: "pointer-events: <v><i>;",
		values: {
			// general
			auto: "auto",
			none: "none",

			// svg only
			all: "all",
			painted: "painted",
			fill: "fill",
			stroke: "stroke",
			box: "bounding-box",
			visible: {
				DEFAULT: "visible",
				painted: "visiblePainted",
				fill: "visibleFill",
				stroke: "visibleStroke",
			},
		},
	},

	outline: {
		DEFAULT: {
			property: "outline: <v><i>;",
			values: {
				0: 0,
				none: 0,
			},
		},

		thick: {
			property: "outline-width: <v><i>;",
			resolve: "spacing",
			themeKey: "thickness",
			values: {
				DEFAULT: "thick",
				thin: "thin",
				medium: "medium",
			},
		},

		style: {
			property: "outline-style: <v><i>;",
			themeKey: "style",
			values: {},
		},

		color: {
			property: "outline-color: <v><i>;",
			resolve: "color",
			themeKey: "colors",
			variant: true,
			values: {},
		},

		offset: {
			property: "outline-offset: <n><v><i>;",
			resolve: "spacing",
			themeKey: "thickness",
			values: {},
		},
	},

	scroll: {
		DEFAULT: {
			property: "scroll-behavior: <v><i>;",
			values: {
				auto: "auto",
				smooth: "smooth",
			},
		},

		...scrollMargin,

		...scrollPadding,

		snap: {
			DEFAULT: {
				property: "scroll-snap-type: <v><i>;",
				values: {
					x: {
						DEFAULT: "x",
						active: "x mandatory",
						lazy: "x proximity",
					},
					y: {
						DEFAULT: "y",
						active: "y mandatory",
						lazy: "y proximity",
					},
					both: {
						DEFAULT: "both",
						active: "both mandatory",
						lazy: "both proximity",
					},
					block: {
						DEFAULT: "block",
						active: "block mandatory",
						lazy: "block proximity",
					},
					inline: {
						DEFAULT: "inline",
						active: "inline mandatory",
						lazy: "inline proximity",
					},
				},
			},

			align: {
				property: "scroll-snap-align: <v><i>;",
				values: {
					start: "start",
					center: "center",
					end: "end",
					none: "none",
					// can add two values here for x and y
					// https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align#syntax
				},
			},

			stop: {
				property: "scroll-snap-stop: <v><i>;",
				values: {
					normal: "normal",
					always: "always",
				},
			},
		},
	},

	select: {
		property: "user-select: <v><i>;",
		values: {
			auto: "auto",
			none: "none",
			text: "text",
			all: "all",
		},
	},

	touch: {
		property: "touch-action: <v><i>;",
		values: {
			normal: "manipulation", // pan-x pan-y pinch-zoom
			auto: "auto",
			none: "none",
			pinch: "pinch-zoom",
			pan: {
				DEFAULT: "pan-x pan-y",
				x: "pan-x",
				y: "pan-y",
			},
		},
	},
};

export default live;
