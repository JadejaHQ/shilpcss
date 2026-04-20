import propereties from "@/config/properties/data";

import { isObj } from "@/lib/types";
import { deepMergeObj } from "@/lib/operations";

/* ============================================================================================= */

/**
 * Resolves and merges the properties configuration.
 * @param config - The shilp config object.
 * @note Initializes `shilpConfig.properties`.
 */
export const resolvePropertiesConfig = (config) => {
	//
	if (!isObj(config.properties)) config.properties = propereties;
	//
	deepMergeObj(config.properties, config.extend.properties || {});
};
