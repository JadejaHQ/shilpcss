import Link from "@/components/link";
import List from "@/components/list";

/* ============================================================================================= */

const Topics = ({ tree }) => {
	return (
		<div className="topics">
			{tree.map((folder) => (
				<Folder key={folder.label} meta={folder} />
			))}
		</div>
	);
};

/* ============================================================================================= */

const Folder = ({ meta }) => (
	<div data-folder={meta.label}>
		<span className="folder__label">{meta.label}</span>

		<List unstyled>
			{meta.childs.map((child) => (
				<li key={child.label}>
					<RenderChild meta={child} />
				</li>
			))}
		</List>
	</div>
);

/* ============================================================================================= */

const FolderPage = ({ meta }) => {
	return (
		<div data-folder-page={meta.label}>
			{/*  */}
			<RenderChild meta={{ ...meta, type: "file" }} />

			<List unstyled>
				{meta.childs.map((child) => (
					<li key={child.label}>
						<RenderChild meta={child} />
					</li>
				))}
			</List>
		</div>
	);
};

/* ============================================================================================= */

const RenderChild = ({ meta }) => {
	// render file as page
	if (meta.type === "file") {
		return (
			<Link href={meta.url} title={meta.title}>
				{meta.label}
			</Link>
		);
	}

	// render nested folder
	if (meta.type === "folder") {
		const Component = meta.isPage ? FolderPage : Folder;
		return <Component meta={meta} />;
	}

	return null;
};

/* ============================================================================================= */

export default Topics;
