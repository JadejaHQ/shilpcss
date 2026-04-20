import CopyToClipboard from "@/components/copy-to-clipboard";

/* ============================================================================================= */

const CodeBlock = ({ lang, title, children }) => {
	//
	if (!lang) return <code>{children}</code>;

	return (
		<div className="code-block" data-lang={lang}>
			<CodeBlockHead title={title} content={children} />
			<CodeBlockBody>{children}</CodeBlockBody>
		</div>
	);
};

/* ============================================================================================= */

const CodeBlockHead = ({ title, content }) => {
	//
	if (!title) return null;

	return (
		<div className="code-block__header">
			{/*  */}
			<span>{title}</span>

			<CopyToClipboard>{content}</CopyToClipboard>
		</div>
	);
};

/* ============================================================================================= */

const CodeBlockBody = ({ children }) => {
	return (
		<div className="code-block__body">
			<pre>
				<code>{children}</code>
			</pre>
		</div>
	);
};

/* ============================================================================================= */

export default CodeBlock;
