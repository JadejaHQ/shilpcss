import { deepCopy } from "@/lib/operations";

/* ============================================================================================= */

/**
 * Returns a theme object based on the resolved values.
 * @param values - An object containing resolved values.
 * @returns A theme object with resolved values (default).
 * @note for user passed theme (`shilpConfig.extend.theme`), additional `theme` argument is available. which is `shilpConfig.theme` (maybe output of this functions).
 */
const theme = (values = {}) => {
	//
	return deepCopy({
		//

		/* ============================================================================================
			MIXINS CONFIG DATA
		============================================================================================ */

		// https://tailwindcss.com/docs/responsive-design
		// https://getbootstrap.com/docs/5.3/layout/breakpoints/
		// order matters: ascending
		screens: {
			xs: "375px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			mac: "1440px",
			max: "1920px",
		},

		/* ============================================================================================
			COMPONENTS CONFIG DATA
		============================================================================================ */

		// https://v3.tailwindcss.com/docs/container#using-the-container
		// https://getbootstrap.com/docs/5.3/layout/containers/
		container: {
			align: "center",
			display: "block",

			// max-width = breakpoint - 2 * spacing
			spacing: {
				sm: "40px",
				md: "48px",
				lg: "56px",
				xl: "60px",
				mac: "80px",
				max: "240px",
			},

			// horizontal padding
			innerPadding: {
				DEFAULT: "16px",
				xs: "24px",
			},
		},

		/* ============================================================================================
			FLAT VALUES
		============================================================================================ */

		globalValues: values.globalValues,
		angles: values.angles,
		blend: values.blend,
		flow: values.flow,
		time: values.time,

		/* ============================================================================================
			GROUPED VALUES
		============================================================================================ */

		// numbers
		numbers: values.numbers?.DEFAULT,
		fractions: values.numbers?.fractions,
		percentages: values.numbers?.percentages,

		// spacing
		spacing: {
			...values.spacing?.percentages,
			...values.spacing?.pixels,
		},
		spacingPercentages: values.spacing?.percentages,
		spacingPixels: values.spacing?.pixels,

		// border
		radius: values.border?.radius,
		style: values.border?.style,
		thickness: values.border?.thickness,

		// filter
		blur: values.filter?.blur,

		// flex-grid
		amount: values.flexGrid?.gridAmount,
		order: values.flexGrid?.order,
		range: values.flexGrid?.gridRange,
		span: values.flexGrid?.gridSpan,

		/* ============================================================================================
			COLORS

			1. white, black, transparent, currentColor
			2. Tailwind colors with color scales
			3. HTML named colors
		============================================================================================ */

		colors: {
			//
			...values.colors,

			/* =========================================================================================
				COLOR ROLES
			========================================================================================== */

			bg: "var(--bg)",
			fg: "var(--fg)",
			border: "var(--border)",
			muted: {
				DEFAULT: "var(--muted)",
				fg: "var(--muted-fg)",
			},
			surface: {
				DEFAULT: "var(--surface)",
				fg: "var(--surface-fg)",
			},

			/* =========================================================================================
				BRAND COLORS
			========================================================================================== */

			primary: {
				DEFAULT: "var(--primary)",
				fg: {
					DEFAULT: "var(--primary-fg)",
					alt: "var(--primary-fg-alt)",
				},
				50: "var(--primary-50)",
				100: "var(--primary-100)",
				200: "var(--primary-200)",
				300: "var(--primary-300)",
				400: "var(--primary-400)",
				500: "var(--primary-500)",
				600: "var(--primary-600)",
				700: "var(--primary-700)",
				800: "var(--primary-800)",
				900: "var(--primary-900)",
				950: "var(--primary-950)",
			},
			secondary: {
				DEFAULT: "var(--secondary)",
				fg: {
					DEFAULT: "var(--secondary-fg)",
					alt: "var(--secondary-fg-alt)",
				},
				50: "var(--secondary-50)",
				100: "var(--secondary-100)",
				200: "var(--secondary-200)",
				300: "var(--secondary-300)",
				400: "var(--secondary-400)",
				500: "var(--secondary-500)",
				600: "var(--secondary-600)",
				700: "var(--secondary-700)",
				800: "var(--secondary-800)",
				900: "var(--secondary-900)",
				950: "var(--secondary-950)",
			},
			accent: {
				DEFAULT: "var(--accent)",
				fg: {
					DEFAULT: "var(--accent-fg)",
					alt: "var(--accent-fg-alt)",
				},
				50: "var(--accent-50)",
				100: "var(--accent-100)",
				200: "var(--accent-200)",
				300: "var(--accent-300)",
				400: "var(--accent-400)",
				500: "var(--accent-500)",
				600: "var(--accent-600)",
				700: "var(--accent-700)",
				800: "var(--accent-800)",
				900: "var(--accent-900)",
				950: "var(--accent-950)",
			},

			/* =========================================================================================
				SEMANTIC COLORS
			========================================================================================== */

			base: {
				DEFAULT: "var(--base)",
				fg: {
					DEFAULT: "var(--base-fg)",
					alt: "var(--base-fg-alt)",
				},
				50: "var(--base-50)",
				100: "var(--base-100)",
				200: "var(--base-200)",
				300: "var(--base-300)",
				400: "var(--base-400)",
				500: "var(--base-500)",
				600: "var(--base-600)",
				700: "var(--base-700)",
				800: "var(--base-800)",
				900: "var(--base-900)",
				950: "var(--base-950)",
			},
			success: {
				DEFAULT: "var(--success)",
				fg: {
					DEFAULT: "var(--success-fg)",
					alt: "var(--success-fg-alt)",
				},
				50: "var(--success-50)",
				100: "var(--success-100)",
				200: "var(--success-200)",
				300: "var(--success-300)",
				400: "var(--success-400)",
				500: "var(--success-500)",
				600: "var(--success-600)",
				700: "var(--success-700)",
				800: "var(--success-800)",
				900: "var(--success-900)",
				950: "var(--success-950)",
			},
			warning: {
				DEFAULT: "var(--warning)",
				fg: {
					DEFAULT: "var(--warning-fg)",
					alt: "var(--warning-fg-alt)",
				},
				50: "var(--warning-50)",
				100: "var(--warning-100)",
				200: "var(--warning-200)",
				300: "var(--warning-300)",
				400: "var(--warning-400)",
				500: "var(--warning-500)",
				600: "var(--warning-600)",
				700: "var(--warning-700)",
				800: "var(--warning-800)",
				900: "var(--warning-900)",
				950: "var(--warning-950)",
			},
			danger: {
				DEFAULT: "var(--danger)",
				fg: {
					DEFAULT: "var(--danger-fg)",
					alt: "var(--danger-fg-alt)",
				},
				50: "var(--danger-50)",
				100: "var(--danger-100)",
				200: "var(--danger-200)",
				300: "var(--danger-300)",
				400: "var(--danger-400)",
				500: "var(--danger-500)",
				600: "var(--danger-600)",
				700: "var(--danger-700)",
				800: "var(--danger-800)",
				900: "var(--danger-900)",
				950: "var(--danger-950)",
			},
			info: {
				DEFAULT: "var(--info)",
				fg: {
					DEFAULT: "var(--info-fg)",
					alt: "var(--info-fg-alt)",
				},
				50: "var(--info-50)",
				100: "var(--info-100)",
				200: "var(--info-200)",
				300: "var(--info-300)",
				400: "var(--info-400)",
				500: "var(--info-500)",
				600: "var(--info-600)",
				700: "var(--info-700)",
				800: "var(--info-800)",
				900: "var(--info-900)",
				950: "var(--info-950)",
			},
		},
	});
};

/* ============================================================================================= */

export default theme;
