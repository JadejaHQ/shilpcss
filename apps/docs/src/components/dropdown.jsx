import { Menu } from "@base-ui/react/menu";

import { cls } from "@/lib/utils";

import {
	CheckIcon,
	ChevronRightIcon,
	CircleIcon,
} from "@/components/assets/icons";

/* ============================================================================================= */

// NOTE: not a dom element
export const DropdownRoot = Menu.Root;

/* ============================================================================================= */

// NOTE: not a dom element
export const DropdownPortal = Menu.Portal;
/* ============================================================================================= */

// NOTE: not a dom element
export const DropdownSub = Menu.SubmenuRoot;

/* ============================================================================================= */

export const DropdownTrigger = ({ className, ...rest }) => (
	<Menu.Trigger {...rest} className={cls("dropdown__trigger", className)} />
);

/* ============================================================================================= */

export const DropdownContent = ({
	portal = {},
	positioner = {},
	align = "start",
	alignOffset = 0,
	side = "bottom",
	sideOffset = 4,
	className,
	ref,
	...rest
}) => {
	return (
		<DropdownPortal {...portal}>
			<Menu.Positioner
				{...positioner}
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				className={cls("dropdown__content-positioner", positioner.className)}
			>
				<Menu.Popup
					{...rest}
					className={cls("dropdown__content", className)}
					ref={ref}
				/>
			</Menu.Positioner>
		</DropdownPortal>
	);
};

/* ============================================================================================= */

export const DropdownGroup = ({ className, ...rest }) => (
	<Menu.Group {...rest} className={cls("dropdown__group", className)} />
);

/* ============================================================================================= */

export const DropdownItem = ({ className, inset = false, ...rest }) => (
	<Menu.Item
		{...rest}
		className={cls("dropdown__item", { inset }, className)}
	/>
);

/* ============================================================================================= */

export const DropdownCheckboxItem = ({ children, className, ...rest }) => (
	<Menu.CheckboxItem
		{...rest}
		className={cls("dropdown__checkbox-item", className)}
	>
		<span className="dropdown__checkbox-item-wrapper">
			<Menu.CheckboxItemIndicator>
				<CheckIcon />
			</Menu.CheckboxItemIndicator>
		</span>

		{children}
		{/*  */}
	</Menu.CheckboxItem>
);

/* ============================================================================================= */

export const DropdownRadioGroup = ({ className, ...rest }) => (
	<Menu.RadioGroup
		{...rest}
		className={cls("dropdown__radio-group", className)}
	/>
);

/* ============================================================================================= */

export const DropdownRadioItem = ({ children, className, ...rest }) => (
	<Menu.RadioItem {...rest} className={cls("dropdown__radio-item", className)}>
		<span className="dropdown__radio-item-wrapper">
			<Menu.RadioItemIndicator>
				<CircleIcon />
			</Menu.RadioItemIndicator>
		</span>

		{children}
		{/*  */}
	</Menu.RadioItem>
);

/* ============================================================================================= */

export const DropdownLabel = ({ className, inset = false, ...rest }) => (
	<Menu.GroupLabel
		{...rest}
		className={cls("dropdown__label", { inset }, className)}
	/>
);

/* ============================================================================================= */

export const DropdownSeparator = ({ className, ...rest }) => (
	<Menu.Separator {...rest} className={cls("dropdown__separator", className)} />
);

/* ============================================================================================= */

export const DropdownShortcut = ({ className, ...rest }) => (
	<kbd {...rest} className={cls("dropdown__shortcut", className)} />
);

/* ============================================================================================= */

export const DropdownSubTrigger = ({ children, className, inset, ...rest }) => (
	<Menu.SubmenuTrigger
		{...rest}
		className={cls("dropdown__sub-trigger", { inset }, className)}
	>
		{children}

		<ChevronRightIcon />
	</Menu.SubmenuTrigger>
);

/* ============================================================================================= */

export const DropdownSubContent = ({
	className,
	inset,
	align = "start",
	alignOffset = -3,
	side = "right",
	sideOffset = 0,
	...rest
}) => (
	<DropdownContent
		{...rest}
		align={align}
		alignOffset={alignOffset}
		side={side}
		sideOffset={sideOffset}
		inset={inset}
		className={cls("dropdown__sub-content", className)}
	/>
);
