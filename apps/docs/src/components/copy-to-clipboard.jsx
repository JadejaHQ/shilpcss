"use client";

/* ============================================================================================= */

import { useState } from "react";

import Button from "@/components/button";

import debounce from "@/lib/debounce";

import { CheckIcon, CopyIcon } from "@icons";

/* ============================================================================================= */

const CopyToClipboard = ({ children }) => {
	//
	const [copied, setCopied] = useState(false);

	// handle copy (including avoiding rage clicks)
	const handleCopy = () => {
		//
		setCopied(async (prev) => {
			//
			if (!prev) {
				//
				await navigator.clipboard.writeText(children);

				return true;
			}

			return prev;
		});

		// delay the reset
		debounce(() => {
			setCopied(false);
		}, 1000);
	};

	return (
		<Button
			variant="outline"
			size="icon-sm"
			onClick={handleCopy}
			title={!copied ? "copy to clipboard" : undefined}
			className="copy-to-clipboard"
			data-copied={copied ? true : undefined}
		>
			{/*  */}
			{copied ? <CheckIcon /> : <CopyIcon />}

			<span className="screen-reader">
				{copied ? "copied" : "copy"} to clipboard
			</span>
		</Button>
	);
};

/* ============================================================================================= */

export default CopyToClipboard;
