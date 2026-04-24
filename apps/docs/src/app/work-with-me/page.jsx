import List from "@/components/list";
import Separator from "@/components/separator";
import Headings from "@/markdown/components/heading";

import { SITE_URL } from "@/lib/constants";

/* ============================================================================================= */

const title = "Work With Shilp CSS Creator - Pradipsinh Jadeja";
const description =
	"Work with the creator of Shilp CSS, an open-source CSS engine and framework. He is available for frontend engineering, architecture, consulting, product collaboration, and sponsorship for Shilp CSS.";

export const metadata = {
	//
	title: {
		absolute: title,
	},

	description,

	keywords: [
		"work with me",
		"pradipsinh jadeja",
		"shilp css creator",
		"frontend engineer",
		"product collaboration",
		"consulting",
		"sponsorship",
	],

	alternates: {
		canonical: "/work-with-me",
		types: {
			"text/markdown":
				"https://raw.githubusercontent.com/jadeja97/jadeja97/refs/heads/main/README.md",
		},
	},

	openGraph: {
		title,
		description,
		url: `${SITE_URL}/work-with-me`,
		type: "article",
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

const WorkWithMe = () => (
	<main id="work-with-me" className="container page-layout">
		<article className="typography">
			{/*  */}

			<HeroSection />

			<OpenTo />

			<Strength />

			<CurrentFocus />

			<WorkTogether />

			<Contact />

			<br />
			<br />

			<Separator />

			<p>Thank you for your time 🙂</p>

			{/*  */}
		</article>
	</main>
);

/* ============================================================================================= */

const HeroSection = () => (
	<>
		<Headings as="h1" id="work-with-me">
			Work With Me
		</Headings>
		<p>
			Hi, my name is <strong>Pradipsinh Jadeja</strong>.<br />
			<strong>Creator of Shilp CSS and Senior Frontend Engineer</strong>.
		</p>
		<p>
			I am open to working with teams that value strong engineering fundamentals
			and product thinking.
		</p>
	</>
);

/* ============================================================================================= */

const OpenTo = () => (
	<section>
		<Headings as="h2" id="open-to">
			Open To
		</Headings>

		<List>
			<li>Frontend Engineer role</li>
			<li>Product-focused startups and engineering teams</li>
			<li>Full-time, contract, or consulting work</li>
			<li>Product and developer tooling collaboration</li>
			<li>Sponsorship that supports the development of Shilp CSS</li>
		</List>
		<p>
			I prefer remote work and collaborate effectively with distributed teams,
			and I am open to discussing what works best for the team.
		</p>
	</section>
);
/* ============================================================================================= */

const Strength = () => (
	<section>
		<Headings as="h2" id="what-i-bring-to-the-table">
			What I Bring To The Table
		</Headings>

		<p>
			My core strength is quickly understanding how systems work, identifying
			patterns, and building structures that make development more predictable
			over time.
		</p>

		<p>
			My work consistently focuses on clarity, performance, and long-term
			reliability rather than short-term fixes.
		</p>

		<p>My core strengths are:</p>

		<List>
			<li>Understanding and stabilizing large or evolving codebases</li>
			<li>Identifying patterns that enable reuse and scalability</li>
			<li>Refactoring and abstracting code to improve maintainability</li>
			<li>
				Delivering proof-of-concepts that transition into real features or even
				products
			</li>
			<li>Mentoring engineers and improving team velocity</li>
		</List>

		<p>
			<strong>
				I may not claim to know everything, but I take ownership, learn fast,
				and deliver dependable results.
			</strong>
		</p>
	</section>
);

/* ============================================================================================= */

const CurrentFocus = () => (
	<section>
		<Headings as="h2" id="current-focus">
			Current Focus
		</Headings>

		<p>
			I am actively investing my time in building the development of Shilp CSS.
		</p>

		<p>
			Shilp CSS is being built as a foundational styling system designed to
			improve developer experience, consistency, and performance in modern
			frontend applications.
		</p>

		<p>Alongside the core engine, I am actively working on:</p>

		<List>
			<li>Clear and practical documentation</li>
			<li>Production-ready patterns for scalable UI systems</li>
			<li>Developer workflows that reduce friction and cognitive load</li>
			<li>Long-term maintainability of frontend architecture</li>
		</List>

		<p>
			<em>Shilp CSS is just the tip of the ice-berge.</em>
		</p>
	</section>
);

/* ============================================================================================= */

const WorkTogether = () => (
	<section>
		<Headings as="h2" id="how-we-can-work-together">
			How We Can Work Together
		</Headings>

		<p>Reach out if you are:</p>
		<List>
			<li>Hiring a Frontend Engineer who can take ownership of systems</li>
			<li>Building a product that requires strong frontend architecture</li>
			<li>Scaling an existing codebase that needs structure and clarity</li>
			<li>Intersted in Product and developer tooling collaboration</li>
			<li>Interested in supporting the long-term development of Shilp CSS</li>
		</List>

		<p>
			I prefer remote work and collaborate effectively with distributed teams,
			and I am open to discussing what works best for the team.
		</p>
	</section>
);

/* ============================================================================================= */

const Contact = () => (
	<section>
		<Headings as="h2" id="contact">
			Contact
		</Headings>

		<p>
			Work Email: <br /> <code>pajadeja117@gmail.com</code>
		</p>

		<p>
			If the direction of the project or the way I work aligns with what you are
			building, feel free to reach out. I am happy to connect and discuss how I
			can contribute.
		</p>
	</section>
);

/* ============================================================================================= */

export default WorkWithMe;
