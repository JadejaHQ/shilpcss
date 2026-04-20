// https://v3.tailwindcss.com/docs/container#using-the-container
// https://getbootstrap.com/docs/5.3/layout/containers/

/* ================================================================================================
	GENERATE TREE
================================================================================================ */

/**
 * Generates container component CSS from a tree structure.
 * @param options - Options for generating component classes from object tree.
 * @param options.config - The shilp config object.
 * @param options.componentName - The name of the component.
 * @returns The generated componet classes CSS string.
 */
const generateTree = ({ config, componentName }) => {
	//
	const containerConfig = config.theme.container;

	// order matters: ascending
	const breakpoints = config.theme.screens;
	const modifiedBreakpoints = { DEFAULT: "", ...breakpoints };

	const containerTree = {};

	for (let breakpoint in modifiedBreakpoints) {
		//

		const container = {
			width: "100%",
		};

		/* ============================================================================================
			BASE
		============================================================================================ */

		if (containerConfig.innerPadding?.DEFAULT) {
			container["padding-left"] = containerConfig.innerPadding.DEFAULT;
			container["padding-right"] = containerConfig.innerPadding.DEFAULT;
		}

		if (containerConfig.display) {
			container.display = containerConfig.display;
		}

		switch (containerConfig.align) {
			case "left":
				container["margin-right"] = "auto";
				break;

			case "right":
				container["margin-left"] = "auto";
				break;

			case "center":
			default:
				container["margin-left"] = "auto";
				container["margin-right"] = "auto";
		}

		/* ============================================================================================
			BREAKPOINTS
		============================================================================================ */

		const trackExisting = [];

		// order matters: ascending
		for (let _breakpoint in breakpoints) {
			if (_breakpoint === breakpoint) break;
			trackExisting.push(_breakpoint);
		}

		// add padding and margin per breakpoint
		for (let _breakpoint in breakpoints) {
			//
			const _container = {};

			if (_breakpoint in containerConfig.innerPadding) {
				_container["padding-left"] = containerConfig.innerPadding[_breakpoint];
				_container["padding-right"] = containerConfig.innerPadding[_breakpoint];
			}

			if (_breakpoint in containerConfig.spacing) {
				if (breakpoint === "DEFAULT" || !trackExisting.includes(_breakpoint)) {
					_container["max-width"] =
						`calc(${breakpoints[_breakpoint]} - 2 * ${containerConfig.spacing[_breakpoint]})`;
				}
			}

			trackExisting.push(_breakpoint);

			container[`@screen ${_breakpoint}`] = _container;
		}

		// add a breakpoint class
		containerTree[
			`.container${breakpoint === "DEFAULT" ? "" : "-" + breakpoint}`
		] = container;
	}

	return containerTree;
};

/* ================================================================================================
	COMPONENT CONFIG
================================================================================================ */

const container = {
	generateTree,
};

/* ============================================================================================= */

export default container;
