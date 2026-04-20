import Link from "@/components/link";
import List from "@/components/list";

import CodeBlock from "./code-block";
import Heading from "./heading";
import Table from "./table";

import Alert from "./alert";

/* ================================================================================================
	HTML Elements
================================================================================================ */

const HTMLElements = {
	/* link */
	a: Link,

	/* headings */
	h1: (props) => <Heading {...props} as="h1" />,
	h2: (props) => <Heading {...props} as="h2" />,
	h3: (props) => <Heading {...props} as="h3" />,
	h4: (props) => <Heading {...props} as="h4" />,
	h5: (props) => <Heading {...props} as="h5" />,
	h6: (props) => <Heading {...props} as="h6" />,

	/* code */
	// pre: don't use `pre` custom component
	code: CodeBlock,

	/* list */
	ul: List,
	ol: (props) => <List ordered {...props} />,

	/* table */
	table: Table,
};

/* ================================================================================================
	JSX Components
================================================================================================ */

const components = {
	Alert,
};

/* ================================================================================================
	MDX Components
================================================================================================ */

const mdxComponents = {
	...HTMLElements,
	...components,
};

/* ============================================================================================= */

export default mdxComponents;
