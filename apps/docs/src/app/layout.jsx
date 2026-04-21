import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

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

	alternates: {
		canonical: "/",
		types: {
			"application/rss+xml": `${SITE_URL}/rss.xml`,
			"text/x-sitemap+xml": `${SITE_URL}/sitemap.xml`,
			"text/plain": `${SITE_URL}/llms.txt`,
		},
	},

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

			{/* Google Analytics (GA4) */}
			{/* Added after the `body` */}

			{/* Microsoft Clarity */}
			<Script id="clarity" strategy="afterInteractive">
				{`(function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "wf6b8hbm1j");`}
			</Script>

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

		{/* Google Analytics (GA4) */}
		<GoogleAnalytics gaId="G-QFX24FX5X6" />
	</html>
);

/* ============================================================================================= */

export default RootLayout;
