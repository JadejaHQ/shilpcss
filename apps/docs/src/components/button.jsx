import { cls, cva } from "@/lib/utils";

import { Button as BaseButton } from "@base-ui/react/button";

/* ============================================================================================= */

export const variants = cva("btn", {
	variants: {
		variant: {
			outline: "btn--outline",
			secondary: "btn--secondary",
			ghost: "btn--ghost",
			success: "btn--success",
			danger: "btn--danger",
			info: "btn--info",
			warning: "btn--warning",
		},

		size: {
			sm: "btn--sm",
			md: "btn--md",
			lg: "btn--lg",
			icon: "btn--icon",
			"icon-sm": "btn--icon--sm",
			"icon-md": "btn--icon--md",
			"icon-lg": "btn--icon--lg",
		},

		hasIcon: {
			false: null,
			true: "has-icon",
		},
	},
	defaultVariants: {
		hasIcon: false,
	},
});

/* ============================================================================================= */

// NOTE: add `has-icon` class. this will help with `:has`.
// `:has` not supported yet in Shilp CSS baseline.
const Button = ({
	className,
	hasIcon = false,
	variant = "default",
	size = "default",
	type = "button",
	...rest
}) => (
	<BaseButton
		{...rest}
		nativeButton={!rest.render}
		className={cls(variants({ variant, size, hasIcon }), className)}
		// prevent form from submitting on enter key press,
		// by default, it consider any button as submit button
		type={type}
	/>
);

/* ============================================================================================= */

export default Button;
