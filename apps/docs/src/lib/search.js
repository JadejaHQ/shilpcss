import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";

import MiniSearch from "minisearch";

import Singleton from "@/lib/singleton";
import {
	SEARCH_INDEX_FIELDS,
	SEARCH_INDEX_PATH,
	SEARCH_INDEX_RETURN_FIELDS,
} from "@/lib/constants";

/* ============================================================================================= */

/**
 * Builds and manages the static search index for documentation content
 *
 * exposes:
 * - `instance.ingest`
 */
class Search {
	//
	constructor(path) {
		return this._init(`search:${path}`);
	}

	_init(path) {
		//
		const instance = Singleton.get(path);

		const registerMethods = instance._registerMethods.bind(instance, this);

		registerMethods(["_createSearchInstance", "ingest"]);

		if (!instance._miniSearchInstance) {
			instance._miniSearchInstance = instance._createSearchInstance();
		}

		return instance;
	}

	/* =========================
		BUILD TIME
	========================= */

	_createSearchInstance() {
		return new MiniSearch({
			fields: SEARCH_INDEX_FIELDS,
			storeFields: SEARCH_INDEX_RETURN_FIELDS,
		});
	}

	ingest(documents) {
		//
		this._miniSearchInstance.addAll(documents);

		const searchIndexPath = join(cwd(), `public${SEARCH_INDEX_PATH}`);
		const serachContent = {
			index: this._miniSearchInstance.toJSON(),
			documents,
		};

		writeFileSync(searchIndexPath, JSON.stringify(serachContent));
	}
}

/* ============================================================================================= */

export default Search;
