import List from "@/components/list";
import Separator from "@/components/separator";

/* ============================================================================================= */

export const metadata = {
	//
	title: {
		absolute:
			"Work With the Creator of Shilp CSS, Frontend Engineer | Pradipsinh Jadeja",
	},

	description:
		"Work with the creator of Shilp CSS, an open-source CSS engine and framework. He is available for frontend engineering, architecture, consulting, product collaboration, and sponsorship for Shilp CSS.",

	alternate: {
		canonical: "/work-with-me",
	},
};

/* ============================================================================================= */

const WorkWithMe = () => (
	<main id="work-with-me" className="container page-layout typography">
		{/*  */}

		<HeroSection />

		<Strength />

		<CurrentFocus />

		<WorkTogether />

		<Contact />

		<br />
		<br />

		<Separator />

		<p>Thank you for your time 🙂</p>

		{/*  */}
	</main>
);

/* ============================================================================================= */

const HeroSection = () => (
	<>
		<h1>Work With Me</h1>
		<p>
			Hi, my name is <strong>Pradipsinh Jadeja</strong>.<br />
			<strong>Creator of Shilp CSS and Senior Frontend Engineer</strong>.
		</p>
		<p>
			I am open to working with teams that value strong engineering fundamentals
			and product thinking.
		</p>
		<p>
			<strong>Open to</strong>:
		</p>
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
	</>
);

/* ============================================================================================= */

const Strength = () => (
	<section>
		<h2>What I Bring To The Table</h2>

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
		<h2>Current Focus</h2>

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
		<h2>How We Can Work Together</h2>

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
		<h2>Contact</h2>

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
