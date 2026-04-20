const aria = {
	variants: {
		// busy: `&[aria-busy]`,
		// checked: `&[aria-checked]`,
		// disabled: `&[aria-disabled]`,
		// expanded: `&[aria-expanded]`,
		// hidden: `&[aria-hidden]`,
		// invalid: `&[aria-invalid]`,
		// pressed: `&[aria-pressed]`,
		// "read-only": `&[aria-readonly]`,
		// required: `&[aria-required]`,
		// selected: `&[aria-selected]`,

		/* functions */
		// @aria is("disabled=false"); --> &[aria-disabled=false]
		is: "&[aria-<1>]",
	},
};

export default aria;
