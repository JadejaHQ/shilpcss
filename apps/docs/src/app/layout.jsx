import "@/styles/main.css";

import ThemeProvider from "@/components/theme/provider";

import { InitialLoad, Routing } from "@/components/layout/page-aware";
import Banner from "@/components/layout/banner";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import Content from "@/lib/content";

import { body, code, display } from "@/lib/fonts";
import { cls } from "@/lib/utils";
import { SITE_URL } from "@/lib/constants";

/* ============================================================================================= */

export const metadata = {
	//
	metadataBase: new URL(SITE_URL),

	title: {
		default: "Shilp CSS",
		template: "%s | Shilp CSS",
	},

	description: "an Intent-first, CSS-centric, styling engine and framework",

	openGraph: {
		type: "website",
		siteName: "Shilp CSS",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		images: ["/og.png"],
	},

	robots: {
		index: true,
		follow: true,
	},
};

/* ============================================================================================= */

// create a search index and content tree
new Content("src/content", "docs");

/* ============================================================================================= */

const RootLayout = ({ children }) => (
	<html
		lang="en"
		suppressHydrationWarning
		className={cls(display.variable, body.variable, code.variable)}
	>
		<head>
			{/* adds `data-root` attr to html on initial load (before dom paint) */}
			<InitialLoad />

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebSite",
						name: "Shilp CSS",
						url: `${SITE_URL}/`,
					}),
				}}
			/>
		</head>

		<body>
			{/* adds `data-root` attr to html on client navigation (before dom paint) */}
			<Routing />

			<ThemeProvider>
				<div id="root">
					{/*  */}

					<Banner />
					<Header />

					<div id="main">{children}</div>

					<Footer />

					{/*  */}
				</div>
			</ThemeProvider>
		</body>
	</html>
);

/* ============================================================================================= */

export default RootLayout;
