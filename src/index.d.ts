import { automaticSize } from "./automaticSize";
import { create } from "./create";
import hydrateAutomaticSize from "./hydrateAutomaticSize";
import { Node, Runtime } from "./Runtime";
import { get, set } from "./Style";
import { Widgets } from "./widgets";

declare const Plasma: (new (rootInstance: Instance) => Node) &
	Runtime & {
		useStyle: typeof get;
		setStyle: typeof set;

		automaticSize: typeof automaticSize;
		hydrateAutomaticSize: typeof hydrateAutomaticSize;
		create: typeof create;
	} & Widgets;

export = Plasma;
