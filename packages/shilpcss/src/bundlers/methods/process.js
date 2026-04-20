import { RESERVED_NAMES } from "@/config/index/constants";
import { INTENT_PATTERN } from "@/config/intents/constants";
import { createIntent, resolveIntent } from "@/config/intents/methods";
import { resolveInlineTheme } from "@/config/theme/methods";

import { logDivider, logNewLine, throwError } from "@/lib/logger";
import { fresh } from "@/lib/operations";

/* ============================================================================================= */

/**
 * Processes content (css) which is the output by pre-processing life-cycle.
 * @param options - Options for processing the contnet.
 * @param options.config - The shilp config object.
 * @param options.content - The pre-processed content (css) to be processed.
 * @param options.filePath - The file path of the content for error logging.
 * @returns The processed content.
 * @throws If an error occurs during processing or intent config not found.
 */
const process = ({ config, content, filePath }) => {
	//
	try {
		//

		/* ============================================================================================
			RESOLVE CONTENT  (intent to css properties)
		============================================================================================ */

		content = content.replace(
			fresh(INTENT_PATTERN),
			//
			(rawContent, rawIntentName, rawUtilities) => {
				//

				// split intent name to parts
				const { name, important } = createIntent(rawIntentName);

				// return the content for reserved names
				if (RESERVED_NAMES.includes(name)) return rawContent;

				// get intent config
				const intentConfig = config.intents[name];

				// throw error if intent config not found
				if (!intentConfig) {
					throwError(
						`INTENTS: \`${name}\` intent name do not exist in shilp config.\nIt is used in "${filePath}".`,
					);
				}

				// remove intent definition if disabled
				if (intentConfig.disable) return "";

				// resolve intent to css properties
				return resolveIntent({
					config,
					intentName: name,
					rawUtilities,
					important,
				});
			},
		);

		/* ============================================================================================
			RESOLVE INLINE THEME
		============================================================================================ */

		// NOTE: one is already at the pre-process method just before scss compilation to prevent error
		// 1. before scss compilation
		// 2. after processing all utilities
		return resolveInlineTheme({ config, content, filePath });
		//
	} catch (err) {
		//
		logDivider();
		logNewLine(`Error: Processing :: ${filePath}`);
		throwError(err);
		logDivider();
	}
};

/* ============================================================================================= */

export default process;
