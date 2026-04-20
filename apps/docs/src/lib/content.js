import { existsSync, readFileSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import { cwd } from "node:process";

import Singleton from "@/lib/singleton";
import Search from "@/lib/search";

/* ============================================================================================= */

/**
 * Builds the documentation tree from the content directory.
 *
 * exposed methods:
 * - `instance.getTree`
 * - `instance.getAllSlugs`
 * - `instance.getFileInfo`
 * - `instance.getNeighbours`
 */
class Content {
	//
	constructor(path, dir) {
		return this._init(path, dir);
	}

	_init(path, dir) {
		//
		const paths = this._getPaths(path, dir);

		const instance = Singleton.get(paths.ROOT);

		const registerMethods = instance._registerMethods.bind(instance, this);

		if (!instance.paths) {
			instance.paths = paths;
		}

		// register methods, so `this` would point to singleton instance and not this class
		registerMethods([
			"_readFile",
			"_readMeta",
			"_getTree",
			"_createFileMeta",
			"_createFolderMeta",
			"_addMeta",
			"_buildSearchIndex",
			"_getNavigationURL",
			"_getURLSafeFilePath",
			"getTree",
			"getAllSlugs",
			"getFileInfo",
			"getNeighbours",
		]);

		if (!instance._slugs) instance._slugs = new Map();
		// TODO: use tree structure to reduce the memory
		if (!instance._list) instance._list = new Map();
		if (!instance._tree) instance._tree = instance._getTree({});

		// create search index
		if (!instance._search) {
			instance._search = new Search(paths.ROOT);
			instance._buildSearchIndex();
		}

		return instance;
	}

	_getPaths(path, dir) {
		// path from project root: {path}{dir}
		const root = join(path, dir);

		return {
			// relative path from project root: src/content
			path,
			// working directory: docs
			dir,
			// relative path from project root: src/content/docs
			root,
			// absolute path: {pathFromDrive}/shilpcss/apps/docs/src/content/docs
			ROOT: join(cwd(), root),
		};
	}

	/* =========================
		READ FILE
	========================= */

	_readFile(file) {
		//
		const isFileExist = existsSync(file);

		if (!isFileExist) return null;

		return readFileSync(file, "utf-8");
	}

	_readMeta(dir) {
		//
		const file = this._readFile(join(dir, "meta.json"));

		if (!file) return {};

		return JSON.parse(file);
	}

	/* ===========================
		NAVIGATION URL & FILE PATH
	=========================== */

	// create navigation url from slugs
	_getNavigationURL(slugs) {
		return [`/${this.paths.dir}`].concat(slugs).join("/");
	}

	// get path for dynamic import
	_getURLSafeFilePath(...args) {
		return join(...args)
			.split(sep)
			.join("/");
	}

	/* =========================
		NAVIGATION TREE
	========================= */

	_getTree({ dir = this.paths.ROOT, parentSlugs = [] }) {
		//
		const meta = this._readMeta(dir);
		if (!meta.items) return [];

		// all the files in current folder is processed first
		// so, creating a queue to hold folders
		const folderQueue = [];

		// get files meta only, queue the folders
		const files = meta.items.map((item) => {
			// remove hidden files
			if (item.hidden) return null;

			const itemType = item.type || "file";

			// file meta
			if (itemType === "file") {
				return this._createFileMeta({ dir, parentSlugs, file: item });
			}

			// queue folder - processed last
			if (itemType === "folder") {
				folderQueue.push(item);
			}

			return null;
		});

		// get folders meta
		const folders = folderQueue.map((folder) => {
			return this._createFolderMeta({ dir, parentSlugs, folder });
		});

		return files.filter(Boolean).concat(folders);
	}

	_createFileMeta({ dir, parentSlugs, file }) {
		// create meta from file name only
		if (typeof file === "string") {
			file = { name: file };
		}

		const slug = file.slug || file.name;

		let slugs = parentSlugs;

		if (slug !== "index") {
			slugs = parentSlugs.concat(slug);
		}

		const label = file.label || slug.replace(/-/g, " ");
		const title = file.title || label;

		const fileMeta = {
			type: "file",
			label, // text
			title, // attr
			url: this._getNavigationURL(slugs), // link
		};

		this._addMeta({ dir, slugs, file: `${file.name}.mdx`, meta: fileMeta });

		return fileMeta;
	}

	_createFolderMeta({ dir, parentSlugs, folder }) {
		//
		const rawFolderName = folder.name;
		let folderName = folder.name;

		// example: "(root)", "(core-concepts)"
		const isVirtual = /^\(.*\)$/.test(rawFolderName);

		if (isVirtual) {
			folderName = rawFolderName.replace(/^\(|\)$/, "");
		}

		const folderPath = join(dir, rawFolderName);

		const childMeta = this._readMeta(folderPath) || {};

		const isPage = childMeta.page;
		const slug = childMeta.slug || folderName; // will be ignored if virtual
		const label = childMeta.label || slug.replace(/-/g, " ");
		const title = childMeta.title || label;

		let slugs = parentSlugs;

		if (!isVirtual && slug !== "index") {
			slugs = parentSlugs.concat(slug);
		}

		const folderMeta = {
			type: "folder",
			isPage,
			label, // text
			title, // attr
			url: this._getNavigationURL(slugs), // link
			childs: this._getTree({ dir: folderPath, parentSlugs: slugs }), // childs
		};

		if (isPage) {
			if (!childMeta.name) {
				throw new Error(
					`"name" property is missing at "${folderPath}${sep}meta.json"`,
				);
			}

			this._addMeta({
				dir,
				slugs,
				file: `${rawFolderName}${sep}${childMeta.name}.mdx`,
				meta: folderMeta,
			});
		}

		return folderMeta;
	}

	_addMeta({ dir, slugs, file, meta }) {
		//
		const index = this._slugs.size;

		const relativePath = relative(this.paths.root, dir);

		const fullMeta = { ...meta, id: index };

		// get data for search
		try {
			const filePath = resolve(dir, file);

			const fileContent = this._readFile(filePath);

			if (fileContent) {
				//
				Object.assign(fullMeta, {
					content: fileContent,
				});
			}
			//
		} catch (err) {
			console.warn(
				`Error: process search data at ${resolve(dir, file)} with index ${index}`,
				err,
			);
		}

		// get index from slug - O(1)
		this._slugs.set(slugs.join("/"), {
			index,
			filePath: this._getURLSafeFilePath(relativePath, file),
		});

		// get file metadata with index - O(1)
		this._list.set(index, fullMeta);
	}

	getTree() {
		return this._tree;
	}

	/* =========================
		SEARCH
	========================= */

	_buildSearchIndex() {
		const documents = Array.from(this._list.values());
		this._search.ingest(documents);
	}

	/* =========================
    SLUGS & FILE INFO
	========================= */

	getAllSlugs() {
		return Array.from(this._slugs.keys()).map((slugs) => ({
			slugs: slugs.split("/"),
		}));
	}

	getFileInfo(slugs = []) {
		//
		const fileInfo = this._slugs.get(slugs.join("/"));

		return {
			...fileInfo,
			meta: this._list.get(fileInfo.index),
		};
	}

	/* =========================
    NEIGHBOURS
	========================= */

	getNeighbours(index) {
		//
		return {
			prev: index > 0 ? this._list.get(index - 1) : null,
			next: index < this._list.size - 1 ? this._list.get(index + 1) : null,
		};
	}
}

/* ============================================================================================= */

export default Content;
