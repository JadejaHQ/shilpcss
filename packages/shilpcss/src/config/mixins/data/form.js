const form = {
	variants: {
		checked: "&:checked",
		// indeterminate: "&:indeterminate",
		// default: "&:default",
		// optional: "&:optional",
		required: "&:required",
		valid: "&:valid",
		invalid: "&:invalid",
		// "in-range": "&:in-range",
		// "out-of-range": "&:out-of-range",
		// "placeholder-visible": "&:placeholder-shown",
		// "auto-fill": "&:autofill",	// NOTE: supported via webkit
		"read-only": "&:read-only",

		// pseudo
		file: "&::file-selector-button",
		placeholder: "&::placeholder",
	},
};

export default form;
