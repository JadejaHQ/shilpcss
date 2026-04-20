import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

import { getAbsolutePath } from "../src/lib/utils.js";

/* ============================================================================================= */

// resolve repo root from package directory
const { __dirname } = getAbsolutePath(import.meta.url);

const repoRoot = resolve(__dirname, "../../../");

// default tag is "latest", but it can be overridden by a pre-release tag
//
let tag = "latest";

// check for pre-release tag in .changeset/pre.json and use it if available
//
const preStatePath = join(repoRoot, ".changeset", "pre.json");

if (existsSync(preStatePath)) {
	//
	const pre = JSON.parse(readFileSync(preStatePath, "utf-8"));

	if (pre?.mode === "pre" && pre?.tag) {
		tag = pre.tag;
	}
}

// log the tag being used for publishing
console.log(`Publishing Shilp CSS with tag: ${tag}`);

// build the package before publishing
execSync(`pnpm build`, { stdio: "inherit" });

// publish the package with the determined tag
execSync(`pnpm publish --tag ${tag} --access public --provenance true`, {
	stdio: "inherit",
});
