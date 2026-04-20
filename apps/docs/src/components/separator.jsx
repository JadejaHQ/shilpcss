import { Separator as BaseSeparator } from "@base-ui/react/separator";

import { cls } from "@/lib/utils";

/* ============================================================================================= */

const Separator = ({ className, vertical = false, ...rest }) => (
	<BaseSeparator
		{...rest}
		orientation={vertical ? "vertical" : "horizontal"}
		className={cls("separator", className)}
	/>
);

/* ============================================================================================= */

export default Separator;
