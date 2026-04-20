import { RESERVED_NAMES } from "@/config/index/constants";

import { isObj } from "@/lib/types";
import { deepMergeObj } from "@/lib/operations";

/* ============================================================================================= */

/**
 * Resolves and merges intents configurations.
 * @param config - The shilp config object.
 * @note Initializes `shilpConfig.intents`.
 */
export const resolveIntentsConfig = (config) => {
	//
	if (!isObj(config.intents)) config.intents = {};

	for (let intentName in config.properties) {
		//
		if (isObj(config.properties[intentName])) {
			deepMergeObj(config.intents, { [intentName]: {} });
		}
	}

	deepMergeObj(config.intents, config.extend.intents || {});

	// prevent using reserved names
	for (let intentName in config.intents) {
		//
		if (RESERVED_NAMES.includes(intentName)) {
			throwError(
				`INTENTS: \`${intentName}\` intent name is a reserved name.\nPlease use different name.`,
			);
		}
	}
};
