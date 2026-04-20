import { cls, cva } from "@/lib/utils";

import {
	CheckSquareIcon,
	JournalTextIcon,
	MegaphoneFillIcon,
	RadioActiveFillIcon,
	TrafficConeFillIcon,
} from "@icons";

/* ============================================================================================= */

export const variants = cva("alert", {
	variants: {
		//
		variant: {
			success: "alert--success",
			info: "alert--info",
			warning: "alert--warning",
			danger: "alert--danger",
		},

		hasIcon: {
			false: null,
			true: "has-icon",
		},

		defaultVariants: {
			hasIcon: true,
		},
	},
});

/* ============================================================================================= */

// NOTE: add `has-icon` class. this will help with `:has`.
// `:has` not supported yet in Shilp CSS baseline.
const Alert = ({ variant, hasIcon = true, title, children, ...rest }) => (
	<Root {...rest} hasIcon={hasIcon} variant={variant}>
		{/*  */}
		{hasIcon && <Icon variant={variant} />}

		<Title variant={variant}>{title}</Title>

		{children && <Description>{children}</Description>}
	</Root>
);

/* ============================================================================================= */

// NOTE: add `has-icon` class. this will help with `:has`.
// `:has` not supported yet in Shilp CSS baseline.
export const Root = ({ className, variant, hasIcon, ...rest }) => (
	<div
		{...rest}
		role="alert"
		className={cls(variants({ variant, hasIcon }), className)}
	/>
);

/* ============================================================================================= */

const getIcon = (variant) => {
	switch (variant) {
		case "info":
			return MegaphoneFillIcon;
		case "warning":
			return TrafficConeFillIcon;
		case "success":
			return CheckSquareIcon;
		case "danger":
			return RadioActiveFillIcon;
		default:
			return JournalTextIcon;
	}
};

export const Icon = ({ variant, ...rest }) => {
	//
	const Component = getIcon(variant);

	return <Component {...rest} />;
};

/* ============================================================================================= */

export const Title = ({ children, className, variant, ...rest }) => (
	<div {...rest} className={cls("alert__title limit-lines", className)}>
		{children || variant || "Note"}
	</div>
);

/* ============================================================================================= */

export const Description = ({ className, ...rest }) => (
	<div {...rest} className={cls("alert__description", className)} />
);

/* ============================================================================================= */

export default Alert;
