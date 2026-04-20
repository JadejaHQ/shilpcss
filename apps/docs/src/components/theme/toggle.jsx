"use client";

/* ============================================================================================= */

import { useTheme } from "next-themes";

import Client from "@/components/client";
import Button from "@/components/button";
import {
	DropdownRoot,
	DropdownContent,
	DropdownItem,
	DropdownTrigger,
} from "@/components/dropdown";

import {
	CheckIcon,
	CircleHalfFillIcon,
	MoonFillIcon,
	SunFillIcon,
} from "@/components/assets/icons";

/* ============================================================================================= */

const ThemeToggle = () => {
	const { theme: activeTheme, setTheme, themes } = useTheme();

	return (
		<DropdownRoot>
			<DropdownTrigger
				render={
					<Button
						hasIcon
						variant="outline"
						size="icon"
						className="theme-toggle__trigger"
					/>
				}
			>
				<Client>
					<Icon theme={activeTheme} />
				</Client>
				<span className="screen-reader">Toggle theme</span>
			</DropdownTrigger>

			<DropdownContent align="end" className="theme-toggle__content">
				{themes.map((theme) => (
					<DropdownItem key={theme} onClick={() => setTheme(theme)}>
						<Icon theme={theme} />

						<span className="theme__label">{theme}</span>

						{theme === activeTheme && (
							<CheckIcon className="theme__active-icon" />
						)}
					</DropdownItem>
				))}
			</DropdownContent>
		</DropdownRoot>
	);
};

/* ============================================================================================= */

const Icon = ({ theme }) => {
	//
	if (theme === "light") return <SunFillIcon />;

	if (theme === "dark") return <MoonFillIcon />;

	return <CircleHalfFillIcon />;
};

/* ============================================================================================= */

export default ThemeToggle;
