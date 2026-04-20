import { RESERVED_NAMES } from "@/config/index/constants";
import mixins from "@/config/mixins/data";

import { isObj } from "@/lib/types";
import { deepMergeObj } from "@/lib/operations";

/* ============================================================================================= */

/**
 * Resolves and merges mixins configuration.
 * @param config - The shilp config object.
 * @note Initializes `shilpConfig.mixins`.
 */
export const resolveMixinsConfig = (config) => {
	//
	if (!isObj(config.mixins)) config.mixins = mixins;
	//
	deepMergeObj(config.mixins, config.extend.mixins || {});

	// prevent using reserved names
	for (let mixinName in config.mixins) {
		//
		if (RESERVED_NAMES.includes(mixinName)) {
			throwError(
				`MIXINS: \`${mixinName}\` mixin name is a reserved name.\nPlease use different name.`,
			);
		}
	}
};
