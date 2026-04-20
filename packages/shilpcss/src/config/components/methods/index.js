import { IMPORT_COMPONENTS_PLACEHOLDER } from "@/config/components/constants";
import { throwError } from "@/lib/logger";

import { deepMergeObj } from "@/lib/operations";
import { isFn, isObj } from "@/lib/types";

/* ================================================================================================
	COMPOSE GENERATED CSS
================================================================================================ */

/**
 * Compose generated CSS from a tree structure.
 * @param options - Options for generating css from object tree.
 * @param options.config - The shilp config object.
 * @param options.componentName - The name of the component.
 * @param options.tree - The tree structure to generate CSS from.
 * @returns The generated CSS string.
 */
const composeGeneratedCSS = ({ config, componentName, tree }) => {
	//
	let css = "";

	for (let branch in tree) {
		// remove branch (componentConfig.mergeTree.*)
		if (!tree[branch]) continue;

		css += resolveTree({
			config,
			componentName,
			branch,
			twig: tree[branch],
		});
	}

	return css;
};

/* ================================================================================================
	GENERATE DYNAMIC COMPONENTS
================================================================================================ */

/**
 * Generates CSS for all components in the configuration.
 * @param options - Options for generating component.
 * @param options.config - The shilp config object.
 * @param options.content - The content to inject dynamically generated components.
 * @returns The content with component CSS injected.
 */
export const generateComponents = ({ config, content }) => {
	//
	return content.replace(IMPORT_COMPONENTS_PLACEHOLDER, () => {
		//
		let defineComponents = "";

		for (let componentName in config.components) {
			//
			const componentConfig = config.components[componentName];

			// remove component
			if (componentConfig.disable) continue;

			/* ======================================================================================= */

			// get component as string
			if (isFn(componentConfig.resolve)) {
				defineComponents +=
					componentConfig.resolve({
						config,
						content,
						componentName,
						componentConfig,
					}) || "";

				break;
				//
			}

			/* ======================================================================================= */

			// get component tree and convert to string
			if (isFn(componentConfig.generateTree)) {
				//
				const generatedTree =
					componentConfig.generateTree({
						config,
						content,
						componentName,
						componentConfig,
					}) || {};

				const mergeTree =
					componentConfig.mergeTree?.({
						config,
						content,
						componentName,
						componentConfig,
						generatedTree,
					}) || {};

				deepMergeObj(generatedTree, mergeTree);

				defineComponents += composeGeneratedCSS({
					config,
					componentName,
					tree: generatedTree,
				});

				break;
				//
			}

			/* ======================================================================================= */

			throwError(
				`COMPONENTS: ${componentName} requires either \`generateTree\` or \`resolve\` function!`,
			);
		}

		return defineComponents;
	});
};

/* ================================================================================================
	RESOLVE TREE
================================================================================================ */

/**
 * Resolves the CSS tree structure for a component.
 * @param options - Options for resolving object tree to css properties.
 * @param options.config - The shilp config object.
 * @param options.componentName - The name of the component.
 * @param options.branch - The CSS branch (e.g., ".my-component").
 * @param options.twig - The twig or tree structure to resolve.
 * @returns The resolved CSS string for the component.
 */
const resolveTree = ({ config, componentName, branch, twig }) => {
	//
	if (isObj(twig)) {
		return `${branch} { ${composeGeneratedCSS({
			config,
			componentName,
			tree: twig,
		})} }`;
	}

	// if branch starts with `@` then it is intent
	// intent -> { "@text" : "size-sm;" }
	// this is completely sepearate from mixins as it have object as value and never reaches at this point
	// mixin -> { "@theme dark" : { "@bg": "color-black;" } }
	if (branch.startsWith("@")) {
		// NOTE: make sure the intent is not repeated, otherwise overrided
		// branch - intent
		// twig - utilities
		return `${branch} ${twig}${!twig.endsWith(";") ? ";" : ""}`;
	}

	// NOTE: inline theme is supported
	return `${branch}: ${twig}${!twig.endsWith(";") ? ";" : ""}`;
};
