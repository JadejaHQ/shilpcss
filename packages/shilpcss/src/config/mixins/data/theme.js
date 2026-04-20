const theme = {
	variants: {
		/* class on parent, style on self */
		dark: ".dark &",
		light: ".light &",

		/* class on self, style on self */
		"dark-self": "&.dark",
		"light-self": "&.light",

		/* class on parent or self, style on self */
		// "dark-any": ".dark &, &.dark",
		// "light-any": ".light &, &.light",
	},
};

export default theme;
