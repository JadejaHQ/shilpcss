import components from "@/config/components/data";

import { isObj } from "@/lib/types";
import { deepMergeObj } from "@/lib/operations";

/* ============================================================================================= */

/**
 * Resolves and merges component configurations.
 * @param config - The shilp config object.
 * @note Initializes `shilpConfig.components`.
 */
export const resolveComponentsConfig = (config) => {
	//
	if (!isObj(config.components)) config.components = components;
	//
	deepMergeObj(config.components, config.extend.components || {});
};
