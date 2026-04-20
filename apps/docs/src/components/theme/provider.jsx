import { ThemeProvider as NextThemeProvider } from "next-themes";

/* ============================================================================================= */

const ThemeProvider = (props) => (
	<NextThemeProvider
		attribute="class"
		enableColorScheme
		defaultTheme="system"
		enableSystem
		disableTransitionOnChange
		storageKey="shilpcss-theme"
		themes={["light", "dark"]}
		{...props}
	/>
);

/* ============================================================================================= */

export default ThemeProvider;
