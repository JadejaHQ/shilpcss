import { useRef, useEffect, useState } from "react";
import MiniSearch from "minisearch";

import {
	SEARCH_INDEX_PATH,
	DEV,
	SEARCH_INDEX_FIELDS,
	SEARCH_INDEX_RETURN_FIELDS,
} from "@/lib/constants";
import sleep from "@/lib/sleep";

/* ============================================================================================= */

// to improve UX (if not added, the results will be snappy)
const QUERY_ARTIFICIAL_DELAY = 250;

/* ============================================================================================= */

/**
 * load the search index and a method to query
 */
const useSearch = () => {
	//
	const instance = useRef(null);
	const abortController = useRef(null);

	const [ready, setReady] = useState(false);
	const [error, setError] = useState(null);

	// load search index
	// for production, it will be force cached
	// cache will be auto refreshed when new version is deployed
	// api path: `/${SEARCH_INDEX_KEY}-v-${DEV ? "dev" : packageJSON.version}.json`
	const initialize = async () => {
		//
		setError(false);

		// abort the previous request if any
		abortController.current?.abort();

		if (instance.current || ready) return;

		try {
			//
			abortController.current = new AbortController();

			const res = await fetch(SEARCH_INDEX_PATH, {
				signal: abortController.current.signal,
				cache: DEV ? "no-store" : "force-cache",
			});

			const data = await res.json();

			instance.current = MiniSearch.loadJS(data.index, {
				fields: SEARCH_INDEX_FIELDS,
				storeFields: SEARCH_INDEX_RETURN_FIELDS,
			});

			// adding artificial delay
			await sleep(1000);

			setReady(true);

			//
		} catch (err) {
			//
			if (err.name === "AbortError") return;
			//
			setError({
				message: "Failed to initialize the search!",
				reason: err,
			});
		}
	};

	// query the search index
	const query = async (searchQuery) => {
		//
		if (searchQuery.trim()) {
			//
			const start = performance.now();

			let data;

			try {
				// adding artificial delay
				await sleep(QUERY_ARTIFICIAL_DELAY);

				data = instance.current.search(searchQuery, {
					prefix: 3,
					fuzzy: 0.2,
					boost: {
						title: 3,
						url: 3,
						label: 2,
						content: 2,
					},
				});
				//
			} catch (err) {
				//
				setError({
					message: `Search failed for ${searchQuery}`,
					reason: err,
				});
				//
			}

			return {
				count: data?.length || 0,
				time: performance.now() - start - QUERY_ARTIFICIAL_DELAY, // remove artificial delay
				data,
			};
		}
	};

	// abort the search index request on unmount
	useEffect(() => {
		//
		return () => {
			abortController.current?.abort();
		};
	}, []);

	return {
		initialize,
		ready,
		error,
		query,
	};
};

/* ============================================================================================= */

export default useSearch;
