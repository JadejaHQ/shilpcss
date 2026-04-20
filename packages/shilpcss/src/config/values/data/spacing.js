// https://v3.tailwindcss.com/docs/customizing-spacing#default-spacing-scale
// https://v3.tailwindcss.com/docs/width#percentage-widths

const spacing = {
	percentages: {
		half: "50%",
		full: "100%",
		// `"x/y": "n%"`, where `x < y` and `y` in range of `1-12`

		// `for` loop defined below, will inject the data
	},

	pixels: {
		auto: "auto",
		0: 0,
		px: "1px",
		0.5: "2px",
		0.75: "3px",
		1: "4px",
		1.5: "6px",
		2: "8px",
		2.5: "10px",
		3: "12px",
		3.5: "14px",
		4: "16px",
		4.5: "18px",
		5: "20px",
		5.5: "22px",
		6: "24px",
		6.6: "26px",
		7: "28px",
		7.5: "30px",
		8: "32px",
		9: "36px",
		10: "40px",
		11: "44px",
		12: "48px",
		14: "56px",
		15: "60px",
		16: "64px",
		18: "72px",
		20: "80px",
		24: "96px",
		28: "112px",
		32: "128px",
		36: "144px",
		40: "160px",
		44: "176px",
		48: "192px",
		52: "208px",
		56: "224px",
		60: "240px",
		64: "256px",
		72: "288px",
		80: "320px",
		96: "384px",
		100: "400px",
	},
};

/* ============================================================================================= */

// `"x/y": "n%"`, where `x < y` and `y` in range of `1-12`
for (let i = 2; i <= 12; i++) {
	for (let j = 1; j < i; j++) {
		Object.assign(spacing.percentages, {
			[`${j}/${i}`]: `${((j / i) * 100).toFixed(2)}%`.replace(".00", ""),
		});
	}
}

/* ============================================================================================= */

export default spacing;
