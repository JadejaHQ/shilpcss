const Table = ({ children, ...rest }) => (
	<div className="table">
		<table {...rest}>{children}</table>
	</div>
);

export default Table;
