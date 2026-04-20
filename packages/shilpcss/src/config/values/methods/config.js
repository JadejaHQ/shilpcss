import values from "@/config/values/data";

import { getColor, getRawColor } from "@/config/values/methods/getters/color";
import { getDefaultValue } from "@/config/values/methods/getters/default";
import {
	getRawSpacing,
	getSpacing,
} from "@/config/values/methods/getters/spacing";

import { isObj } from "@/lib/types";
import { deepMergeObj } from "@/lib/operations";

/* ============================================================================================= */

/**
 * Resolves and merges the values configuration.
 * @param config - The shilp config object.
 * @note Initialize `shilpConfig.values` and `shilpConfig.valueResolvers`.
 */
export const resolveValuesConfig = (config) => {
	//

	/* ==============================================================================================
	RESOLVE VALUES
	============================================================================================== */

	if (!isObj(config.values)) config.values = values;
	deepMergeObj(config.values, config.extend.values || {});

	/* ==============================================================================================
		RESOLVE VALUE RESOLVERS
	============================================================================================== */

	if (!isObj(config.valueResolvers)) {
		//
		config.valueResolvers = {
			//
			default: getDefaultValue,

			// colors
			color: getColor,
			rawColor: getRawColor,

			// spacing
			spacing: getSpacing,
			rawSpacing: getRawSpacing,
		};
	}

	deepMergeObj(config.valueResolvers, config.extend.valueResolvers || {});
};
