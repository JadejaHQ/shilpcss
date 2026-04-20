const data = {
	variants: {
		disabled: `&[data-disabled]`,
		open: `&[data-open]`,
		closed: `&[data-closed]`,

		/* functions */
		// @data is("disabled=false"); --> &[data-disabled=false]
		is: "&[data-<1>]",
		state: "&[data-state=<1>]",
	},
};

export default data;
