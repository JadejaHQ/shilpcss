import { useId } from "react";

/* ============================================================================================= */

const List = ({ ordered = false, unstyled = false, caption, ...rest }) => {
	//
	const Component = ordered ? "ol" : "ul";
	const unstyledProps = unstyled ? { role: "list", "data-unstyled": true } : {};

	if (caption) {
		return (
			<ListWithCaption
				unstyledProps={unstyledProps}
				{...rest}
				caption={caption}
				component={Component}
			/>
		);
	}

	return <Component {...unstyledProps} {...rest} />;
};

/* ============================================================================================= */

const ListWithCaption = ({
	component: Component,
	unstyled = false,
	caption,
	unstyledProps,
	...rest
}) => {
	//
	const uid = useId();

	return (
		<div className="list">
			<p id={uid} className="list__caption">
				{caption}
			</p>
			<Component {...unstyledProps} {...rest} aria-labelledby={uid} />
		</div>
	);
};

/* ============================================================================================= */

export default List;
