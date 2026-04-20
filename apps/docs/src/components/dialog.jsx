import { Dialog } from "@base-ui/react/dialog";

import Button from "@/components/button";

import { cls } from "@/lib/utils";

import { XIcon } from "@icons";

/* ============================================================================================= */

// NOTE: not a dom element
export const DialogRoot = Dialog.Root;

/* ============================================================================================= */

// NOTE: not a dom element
export const DialogPortal = Dialog.Portal;

/* ============================================================================================= */

export const DialogTrigger = ({ className, ...rest }) => (
	<Dialog.Trigger {...rest} className={cls("dialog__trigger", className)} />
);

/* ============================================================================================= */

export const DialogClose = ({
	className,
	hideCloseButton = false,
	isWrapper = false,
	hideFocus = false,
	...rest
}) => {
	//
	if (hideCloseButton) return;

	return (
		<Dialog.Close
			{...rest}
			{...(hideFocus ? { tabIndex: -1 } : {})}
			className={cls("dialog__close", { wrapper: isWrapper }, className)}
		/>
	);
};

/* ============================================================================================= */

export const DialogOverlay = ({ children, className, ...rest }) => (
	<Dialog.Backdrop {...rest} className={cls("dialog__overlay", className)} />
);

/* ============================================================================================= */

export const DialogContent = ({
	children,
	portal = {},
	hideCloseButton = true,
	overlay = {},
	close = {},
	className,
	ref,
	...rest
}) => (
	<DialogPortal {...portal}>
		<DialogOverlay {...overlay} />
		<Dialog.Popup
			{...rest}
			className={cls("dialog__content", className)}
			ref={ref}
		>
			{/*  */}
			{children}

			<DialogClose
				hideCloseButton={hideCloseButton}
				render={<Button variant="ghost" size="icon-sm" />}
				{...close}
			>
				<XIcon />
				<span className="screen-reader">Close</span>
			</DialogClose>
		</Dialog.Popup>
	</DialogPortal>
);

/* ============================================================================================= */

export const DialogHeader = ({ className, ...rest }) => (
	<div {...rest} className={cls("dialog__header", className)} />
);

/* ============================================================================================= */

export const DialogFooter = ({ className, ...rest }) => (
	<div {...rest} className={cls("dialog__footer", className)} />
);

/* ============================================================================================= */

export const DialogTitle = ({ className, ...rest }) => (
	<Dialog.Title {...rest} className={cls("dialog__title", className)} />
);

/* ============================================================================================= */

export const DialogDescription = ({ className, ...rest }) => (
	<Dialog.Description
		{...rest}
		className={cls("dialog__description", className)}
	/>
);
