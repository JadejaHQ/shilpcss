"use client";

/* ============================================================================================= */

import { useState, useEffect, startTransition, useRef } from "react";

import Button from "@/components/button";
import Link from "@/components/link";
import List from "@/components/list";
import Separator from "@/components/separator";
import { DialogClose } from "@/components/dialog";
import AlienLife from "@/components/loaders/alien-life";
import ZZZZ from "@/components/loaders/zzzz";

import useSearch from "@/hooks/useSearch";

import debounce from "@/lib/debounce";

import { ChevronBarUpIcon } from "@icons";

/* ============================================================================================= */

const Search = () => {
	//
	const { initialize, ready, error, query } = useSearch();

	const [search, setSearch] = useState("");
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!ready) {
			initialize();
		}
	}, []);

	const handleSearch = (text) => {
		setSearch(text);
		setResult(null);

		startTransition(() => {
			//
			setLoading(true);

			debounce(async () => {
				const result = await query(text);
				setResult(result);
				setLoading(false);
			});
		});
	};

	return (
		<div className="search">
			{/*  */}
			<CloseButton />

			<SearchInput ready={ready} search={search} handleSearch={handleSearch} />

			{result ? (
				/* show result */
				<Result result={result} />
			) : (
				/* show loader when result is not available */
				<div className="search-loader__wrapper">
					<Loaders search={search} ready={ready} />
				</div>
			)}
		</div>
	);
};

/* ============================================================================================= */

const SearchInput = ({ ready, search, handleSearch }) => {
	//
	const inputRef = useRef();

	useEffect(() => {
		if (ready) {
			inputRef.current?.focus();
		}
	}, [ready]);

	return (
		<div className="search__input">
			<input
				type="text"
				name="search"
				ref={inputRef}
				placeholder="Search docs..."
				disabled={!ready}
				value={search}
				onChange={(e) => handleSearch(e.target.value)}
			/>
		</div>
	);
};

/* ============================================================================================= */

const Result = ({ result = {} }) => (
	<div className="search-result">
		{/*  */}

		<div className="search-result__states">
			<span>
				Found {result?.count || 0} results in{" "}
				{((result?.time || 0) / 10).toFixed(2)} seconds
			</span>{" "}
			<br />
			<span>Search isn't perfect. some results may be unrelated.</span>
		</div>

		<Separator />

		<div
			className="search-result__container scroll-fade"
			data-search-empty={result.count === 0 ? true : undefined}
		>
			{/* no content message */}
			{result.count === 0 && <p>Data not available.</p>}

			{/* result list */}
			{result.count > 0 && (
				<List unstyled>
					{result?.data?.map((result) => (
						<li key={result.id}>
							<DialogClose isWrapper hideFocus>
								<Link href={result.url} title={result.title}>
									<span className="link__label">{result.label}</span>
									<span className="link__url">{result.url}</span>
									<span className="link__confidence">
										Confidence: {result.score.toFixed(2)}%
									</span>
								</Link>
							</DialogClose>
						</li>
					))}
				</List>
			)}
		</div>
	</div>
);

/* ============================================================================================= */

const CloseButton = () => (
	<DialogClose hideCloseButton={false} render={<Button variant="ghost" />}>
		<ChevronBarUpIcon />
		<span className="screen-reader">close search popup</span>
	</DialogClose>
);

/* ============================================================================================= */

const Loaders = ({ search, ready }) => {
	//

	/* 1. no input */
	if (!search?.trim() && ready) {
		return <ZZZZ />;
	}

	/* 2. fetching search index or results */
	return <AlienLife />;
};

/* ============================================================================================= */

export default Search;
