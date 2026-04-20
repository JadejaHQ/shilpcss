const shilpConfig = {
	source: null,

	extend: {
		theme: {
			container: {
				spacing: {
					sm: "24px",
					md: "24px",
					lg: "24px",
					xl: "24px",
					mac: "24px",
					max: undefined,
				},
				innerPadding: {
					xs: "16px",
					md: "24px",
				},
			},
		},

		properties: {
			layout: {
				scroll: {
					fade: {
						DEFAULT: {
							property: "--scroll-fade-direction: <v><i>;",
							values: {
								x: "to right",
								y: "to bottom",
							},
						},
						size: {
							property: "--scroll-fade-size: <v><i>;",
							resolve: "spacing",
							themeKey: "spacing",
						},
					},
				},
			},
		},
	},
};

export default shilpConfig;
