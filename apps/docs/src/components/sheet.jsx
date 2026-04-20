import { Dialog as Sheet } from "@base-ui/react/dialog";

import Button from "@/components/button";

import { cls } from "@/lib/utils";

import { XIcon } from "@icons";

/* ============================================================================================= */

// NOTE: not a dom element
export const SheetRoot = Sheet.Root;

/* ============================================================================================= */

// NOTE: not a dom element
export const SheetPortal = Sheet.Portal;

/* ============================================================================================= */

export const SheetTrigger = ({ className, ...rest }) => (
	<Sheet.Trigger {...rest} className={cls("sheet__trigger", className)} />
);

/* ============================================================================================= */

export const SheetClose = ({
	className,
	hideCloseButton = false,
	isWrapper = false,
	hideFocus = false,
	...rest
}) => {
	//
	if (hideCloseButton) return;

	return (
		<Sheet.Close
			{...rest}
			{...(hideFocus ? { tabIndex: -1 } : {})}
			className={cls("sheet__close", { wrapper: isWrapper }, className)}
		/>
	);
};

/* ============================================================================================= */

export const SheetOverlay = ({ children, className, ...rest }) => (
	<Sheet.Backdrop {...rest} className={cls("sheet__overlay", className)} />
);

/* ============================================================================================= */

export const SheetContent = ({
	children,
	portal = {},
	side = "right",
	hideCloseButton = true,
	overlay = {},
	close = {},
	className,
	ref,
	...rest
}) => (
	<SheetPortal {...portal}>
		<SheetOverlay {...overlay} />
		<Sheet.Popup
			{...rest}
			className={cls("sheet__content", side, className)}
			ref={ref}
		>
			{/*  */}
			{children}

			<SheetClose
				hideCloseButton={hideCloseButton}
				render={<Button variant="ghost" size="icon-sm" />}
				{...close}
			>
				<XIcon />
				<span className="screen-reader">Close</span>
			</SheetClose>
		</Sheet.Popup>
	</SheetPortal>
);

/* ============================================================================================= */

export const SheetHeader = ({ className, ...rest }) => (
	<div {...rest} className={cls("sheet__header", className)} />
);

/* ============================================================================================= */

export const SheetFooter = ({ className, ...rest }) => (
	<div {...rest} className={cls("sheet__footer", className)} />
);

/* ============================================================================================= */

export const SheetTitle = ({ className, ...rest }) => (
	<Sheet.Title {...rest} className={cls("sheet__title", className)} />
);

/* ============================================================================================= */

export const SheetDescription = ({ className, ...rest }) => (
	<Sheet.Description
		{...rest}
		className={cls("sheet__description", className)}
	/>
);
