const form = {
	accent: {
		property: "accent-color: <v><i>;",
		resolve: "color",
		themeKey: "colors",
		variant: true,
		values: {
			auto: "auto",
		},
	},

	// text-area
	resize: {
		property: "resize: <v><i>;",
		values: {
			none: "none",
			DEFAULT: "both",
			x: "horizontal",
			y: "vertical",
			block: "block",
			inline: "inline",
		},
	},

	skin: {
		property: "appearance: <v><i>;",
		values: {
			none: "none",
			auto: "auto",
			search: "search-field",
			textarea: "textarea",
			checkbox: "checkbox",
			radio: "radio",
			menu: "menulist",
			list: "listbox",
			meter: "meter",
			progress: "progress-bar",
			button: "button",
		},
	},
};

export default form;
