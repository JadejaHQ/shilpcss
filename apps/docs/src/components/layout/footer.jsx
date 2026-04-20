import { Fragment } from "react";

import Link from "@/components/link";
import Separator from "@/components/separator";

import { socialLinks } from "@/data/links";

/* ============================================================================================= */

const Footer = () => (
	<div className="footer__wrapper">
		<footer className="container">
			<Quote />
			<Socials />
			<Copyright />
		</footer>
	</div>
);

/* ============================================================================================= */

const Quote = () => <p className="footer__quote">Craft Practiced Over Time</p>;

/* ============================================================================================= */

const Socials = () => (
	<div className="footer__socials">
		{Object.values(socialLinks).map((link, index) => (
			<Fragment key={link.url}>
				{/*  */}
				{index !== 0 && <Separator vertical />}

				<Link
					href={link.url}
					title={link.title || link.label}
					className="social"
				>
					<link.icon />
				</Link>
			</Fragment>
		))}
	</div>
);

/* ============================================================================================= */

const Copyright = () => (
	<small className="footer__copyright">
		2026 - Present &copy;{" "}
		<Link href="https://x.com/jadeja97_">Pradipsinh Jadeja</Link>
	</small>
);

/* ============================================================================================= */

export default Footer;
