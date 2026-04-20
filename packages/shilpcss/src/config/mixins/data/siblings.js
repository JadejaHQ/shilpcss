const siblings = {
	variants: {
		// https://www.youtube.com/watch?v=rndMS4pEKP8&t=145s

		/* NOTE:

		`+`
		will be all the following direct siblings, no other element in between, not nested, not from other parents
		valid: a a a a
		invalid: a a b a a (before b all are valid)

		`~`
		will be all the following siblings, other elements can exist in between, not nested, not from other parents
		valid: a a a a, a a b a a
		invalid: none
		*/

		/* functions */
		match: "& ~ <1>", // not nested, not from other parents, all following
		"match-closest": "& + <1>", // not nested, not from other parents, all direct following
	},
};

export default siblings;
