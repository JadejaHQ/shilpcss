import { readdirSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";

import { SEARCH_INDEX_KEY } from "../src/lib/constants.js";

/* ============================================================================================= */

// post build script to remove old search index files

/* ============================================================================================= */

const publicDir = join(cwd(), "public");

const files = readdirSync(publicDir);

files
	.filter((file) => file.startsWith(SEARCH_INDEX_KEY))
	.forEach((file) => {
		//
		const filePath = join(publicDir, file);

		unlinkSync(filePath);
	});

console.log(`::::::: DOCS CLEANUP COMPLETED :::::::`);
