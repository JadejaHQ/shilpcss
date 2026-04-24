import "@/styles/main.css";

import ThemeProvider from "@/components/theme/provider";

import { MSClarity, GA4 } from "@/components/layout/analytics";
import { InitialLoad, Routing } from "@/components/layout/page-aware";
import Banner from "@/components/layout/banner";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import Content from "@/lib/content";

import { body, code, display } from "@/lib/fonts";
import { cls } from "@/lib/utils";
import { SITE_URL } from "@/lib/constants";

/* ============================================================================================= */

const title = "Shilp CSS";
const description =
	"an Intent-first, CSS-centric, styling engine and framework";

export const metadata = {
	//
	metadataBase: new URL(SITE_URL),

	title: {
		default: title,
		template: "%s | Shilp CSS",
	},

	description,
	keywords: [
		"shilp css",
		"framework",
		"library",
		"styling engine",
		"intent-first css",
		"css-centric styling",
	],

	alternates: {
		canonical: "/",
		types: {
			"application/rss+xml": `${SITE_URL}/rss.xml`,
			"text/x-sitemap+xml": `${SITE_URL}/sitemap.xml`,
			"text/plain": `${SITE_URL}/llms.txt`,
		},
	},

	openGraph: {
		title,
		description,
		url: SITE_URL,
		type: "website",
		siteName: "Shilp CSS",
		locale: "en_US",
		author: "Pradipsinh Jadeja",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
			},
		],
	},

	twitter: {
		title,
		description,
		card: "summary_large_image",
		images: ["/og.png"],
		site: "@shilpcss",
		siteId: "2030301913112285184",
		creator: "@jadeja97_",
		creatorId: "1951893079608160256",
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

			{/* analytics scripts added at the end of body */}

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

			{/* Google Analytics (GA4) */}
			<GA4 />
			{/* Microsoft Clarity */}
			<MSClarity />
		</body>
	</html>
);

/* ============================================================================================= */

export default RootLayout;
