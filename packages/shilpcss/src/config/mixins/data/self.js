const self = {
	variants: {
		// pseudo
		before: "&::before",
		after: "&::after",

		//
		first: "&:first-child",
		last: "&:last-child",
		// only: "&:only-child",
		odd: "&:nth-child(odd)",
		even: "&:nth-child(even)",
		//
		// "first-of-type": "&:first-of-type",
		// "last-of-type": "&:last-of-type",
		// "only-of-type": "&:only-of-type",

		/* functions */
		nth: "&:nth-child(<1>)",
		// "nth-last": "&:nth-last-child(<1>)",
		// "nth-of-type": "&:nth-of-type(<1>)",
		// "nth-last-of-type": "&:nth-last-of-type(<1>)",
	},
};

export default self;
