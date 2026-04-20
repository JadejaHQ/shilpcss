import { visit } from "unist-util-visit";

/* ============================================================================================= */

/**
 * Remark plugin to extract code metadata as props
 */
const remarkCodeMeta = () => {
	//
	return (tree) => {
		visit(tree, "code", (node) => {
			// filter backtick code (``)
			// it doesn't have `lang`
			if (!node.lang) return;

			// ensure data exist
			node.data ??= {};

			// expose props to `code` element
			// hProperties passed as serialized
			node.data.hProperties = {
				...node.data.hProperties,
				lang: node.lang,
				// rawValue: node.value,
				...processMeta(node.meta),
			};

			return node;
		});
	};
};

/* ============================================================================================= */

/**
 * convert `code` meta string to props object
 */
const processMeta = (meta) => {
	//
	const result = {};

	// matches:
	// key="value"
	// key='value'
	// key=value
	// key
	const matches = /(\w+)(?:=(?:"([^"]*)"|'([^']*)'|(\S+)))?/g.exec(meta);

	const key = matches[1];

	// pick whichever capture group matched
	const value = matches[2] ?? matches[3] ?? matches[4];

	// boolean flag
	result[key] = value ?? true;

	return result;
};

/* ============================================================================================= */

export default remarkCodeMeta;
