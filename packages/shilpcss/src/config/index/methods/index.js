import { resolveComponentsConfig } from "@/config/components/methods/config";
import { resolveIntentsConfig } from "@/config/intents/methods/config";
import { resolveMixinsConfig } from "@/config/mixins/methods/config";
import { resolvePropertiesConfig } from "@/config/properties/methods/config";
import { resolveThemeConfig } from "@/config/theme/methods/config";
import { resolveValuesConfig } from "@/config/values/methods/config";

import { isObj } from "@/lib/types";

/* ============================================================================================= */

/**
 * Resolves and merges default config with user config.
 * @param config - The shilp config object to be resolved.
 * @note Mutate the shilp config object with various configs resolved.
 */
export const resolveConfig = (config) => {
	// add extend if not exist
	if (!isObj(config.extend)) config.extend = {};

	// Resolve: values
	resolveValuesConfig(config);

	// Resolve: theme (depends on resolved values)
	resolveThemeConfig(config);

	// Resolve: properties (depends on resolved values & resolved theme)
	resolvePropertiesConfig(config);

	// Create & Resolve: intents (depends on resolved properties)
	resolveIntentsConfig(config);

	// Resolve: components (may depends on any of the above)
	resolveComponentsConfig(config);

	// Resolve: mixins (independent)
	resolveMixinsConfig(config);
};
