import Link from "@/components/link";

import { variants as btnVariants } from "@/components/button";

/* ============================================================================================= */

const RootPage = () => (
	<main id="home" className="container page-layout typography">
		{/*  */}

		<Hero />

		<TheProblem />

		<BetterWayToStyle />

		<TheDifference />

		<TheTradeoffs />

		<Status />

		{/*  */}
	</main>
);

/* ============================================================================================= */

const Hero = () => (
	<section className="hero">
		<span className="hero__pre">CSS, Practiced as Craft.</span>
		<h1>Intent First styling engine for people who care.</h1>
		<p className="hero__post">No markup bloat. Just deliberate styling.</p>

		<div className="hero__cta">
			<Link href="/docs" className={btnVariants({ size: "md" })}>
				Get Started
			</Link>
		</div>
	</section>
);

/* ============================================================================================= */

const TheProblem = () => (
	<section>
		<h2>The Problem</h2>

		<p>
			Modern CSS tooling optimized for shipping speed, by moving styling
			decisions into markup.
		</p>

		<p>At scale, it leads to:</p>

		<ul>
			<li>Noisy markup</li>
			<li>Repeated patterns with no names</li>
			<li>Refactors driven by search-and-replace</li>
			<li>Deep coupling to tooling and conventions</li>
		</ul>

		<p>These are side effects of moving decisions into markup.</p>

		<p>
			<strong>Shilp CSS exists to move style decisions back into CSS.</strong>{" "}
			<br /> Where they can be named, owned, and changed safely.
		</p>
	</section>
);

/* ============================================================================================= */

const BetterWayToStyle = () => (
	<section>
		<h2>A Better Way to Style</h2>

		<p>
			You write <strong>intent-based styles inside CSS</strong>, and apply them
			through named classes like traditional CSS.
		</p>

		<p>The expected result:</p>

		<ul>
			<li>
				Smaller bundle size
				<ul>
					<li>
						<small>HTML and CSS combined</small>
					</li>
				</ul>
			</li>
			<li>Centralized styling decisions</li>
			<li>Easier refactors as project grows</li>
			<li>Clean markup</li>
		</ul>

		<p>
			If you have ever felt class strings getting out of hand, Shilp CSS exists
			for that moment.
		</p>
	</section>
);

/* ============================================================================================= */

const TheDifference = () => (
	<section>
		<h2>What Makes It Different</h2>

		<p>Shilp CSS is:</p>

		<ul>
			<li>
				<strong>CSS-first</strong>: styles live where they belong (
				<code>.css</code>)
			</li>
			<li>
				<strong>Intent-oriented</strong>: styles organized into intents like
				layout, flex, grid, text, animate, etc
			</li>
			<li>
				<strong>Config-driven</strong>: config file similar like{" "}
				<Link href="https://v3.tailwindcss.com/docs/configuration">
					Tailwind CSS v3
				</Link>
			</li>
			<li>
				<strong>Purgable</strong>: In-built support for{" "}
				<Link href="https://purgecss.com/introduction.markup">Purge CSS</Link>
			</li>
			<li>
				<strong>Modern</strong>: In-built support for{" "}
				<Link href="https://lightningcss.dev">Lightning CSS</Link>
			</li>
			<li>
				<strong>Advance</strong>: In-built support for{" "}
				<Link href="https://sass-lang.com/documentation">SCSS</Link>
			</li>
			<li>
				<strong>Ready to integrate</strong>: via bundler plugin
			</li>
		</ul>

		<p>
			<strong>You don’t lose utility power. You regain structure.</strong>
		</p>
	</section>
);

/* ============================================================================================= */

const TheTradeoffs = () => (
	<section>
		<h2>The Tradeoffs</h2>

		<p>
			<em>Shilp CSS is not the fastest way to prototype.</em>
		</p>

		<p>It asks for:</p>

		<ul>
			<li>Slightly more CSS</li>
			<li>A bit more thinking up front</li>
		</ul>

		<p>In return, it gives you:</p>

		<ul>
			<li>
				Smaller bundle size
				<ul>
					<li>
						<small>HTML and CSS combined</small>
					</li>
				</ul>
			</li>
			<li>
				Clear refactors{" "}
				<small>
					( <em>it depends</em> )
				</small>
			</li>
			<li>Readable markup</li>
			<li>Systems that age calmly</li>
		</ul>
	</section>
);

/* ============================================================================================= */

const Status = () => (
	<section>
		<h2>Status</h2>

		<p>
			Shilp CSS is currently in <em>active development</em> (
			<strong>alpha</strong>), and{" "}
			<strong>
				not recommended for production use, even for personal projects
			</strong>
			.
		</p>

		<p>
			If you value clarity over time, continue. <br /> If speed today matters
			more, choose differently, choose deliberately.
		</p>

		<div className="bottom__cta">
			<Link href="/docs" className={btnVariants({ size: "md" })}>
				Explore Shilp CSS
			</Link>
		</div>
	</section>
);

/* ============================================================================================= */

export default RootPage;
