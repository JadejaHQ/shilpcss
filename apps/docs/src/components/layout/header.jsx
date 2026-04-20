import Link from "@/components/link";
import Button from "@/components/button";
import Separator from "@/components/separator";
import List from "@/components/list";
import ThemeToggle from "@/components/theme/toggle";
import Search from "@/components/layout/search";

import { DialogRoot, DialogTrigger, DialogContent } from "@/components/dialog";
import {
	SheetRoot,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetFooter,
	SheetClose,
} from "@/components/sheet";

import Logo from "@/components/assets/logo";
import { MenuIcon, SearchIcon } from "@icons";

import { navLinks, socialLinks } from "@/data/links";

/* ============================================================================================= */

const Header = () => (
	<div className="header__wrapper">
		<header className="container">
			{/*  */}
			<Link href="/" className="header__logo">
				<Logo /> <span>Shilp CSS</span>
			</Link>

			<div className="header__navigation">
				<MobileNavigation />
				<DesktopNavigation />
			</div>
		</header>
	</div>
);

/* ============================================================================================= */

const MobileNavigation = () => (
	<div className="header--mobile">
		{/*  */}
		<SearchPopup />

		<SheetRoot>
			<SheetTrigger render={<Button hasIcon variant="ghost" size="icon-md" />}>
				<MenuIcon />
				<span className="screen-reader">navigation menu</span>
			</SheetTrigger>
			<SheetContent
				side="right"
				hideCloseButton={false}
				className="header--mobile-content"
			>
				<SheetHeader>
					<SheetTitle>
						<Logo /> <span>Shilp CSS</span>
					</SheetTitle>
				</SheetHeader>

				<List unstyled>
					{Object.values(navLinks).map((link) => (
						<li key={link.url}>
							<SheetClose
								isWrapper
								nativeButton={false}
								render={<Link href={link.url} />}
							>
								{link.label}
							</SheetClose>
						</li>
					))}
				</List>

				<SheetFooter>
					<Socials />
					<ThemeToggle />
				</SheetFooter>
			</SheetContent>
		</SheetRoot>
	</div>
);

/* ============================================================================================= */

const DesktopNavigation = () => (
	<div className="header--desktop">
		{/*  */}
		<nav>
			<List unstyled>
				{Object.values(navLinks).map((link) => (
					<li key={link.url}>
						<Link navLink href={link.url} title={link.title || link.label}>
							{link.label}
						</Link>
					</li>
				))}
			</List>
		</nav>

		<Separator vertical />

		<SearchPopup />

		<Separator vertical />

		<Socials />

		<Separator vertical />

		<ThemeToggle />
	</div>
);

/* ============================================================================================= */

const SearchPopup = () => (
	<DialogRoot>
		{/*  */}
		<DialogTrigger render={<Button hasIcon variant="ghost" size="icon-sm" />}>
			<SearchIcon />
			<span className="screen-reader">open search popup</span>
		</DialogTrigger>

		<DialogContent hideCloseButton={true} className="search-content">
			{/*  */}
			<Search />
			{/*  */}
		</DialogContent>
	</DialogRoot>
);

/* ============================================================================================= */

const Socials = () => (
	<List unstyled className="social-icons">
		{Object.values(socialLinks).map((link) => (
			<li key={link.url}>
				<Link href={link.url} title={link.title || link.label}>
					<link.icon />
				</Link>
			</li>
		))}
	</List>
);

/* ============================================================================================= */

export default Header;
