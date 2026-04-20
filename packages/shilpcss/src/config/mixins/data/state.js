const state = {
	variants: {
		disabled: "&:disabled",
		enabled: "&:enabled",
		empty: "&:empty",
		hover: ["@media (hover: hover)", "&:hover"],
		// "real-focus": "&:focus",
		focus: "&:focus-visible",
		// "focus-within": "&:focus-within",
		active: "&:active", // active during user interaction (press/hold/trigger)
		// visited: "&:visited",
		target: "&:target",
	},
};

export default state;
