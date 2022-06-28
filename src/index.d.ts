import { automaticSize } from "./automaticSize";
import { create } from "./create";
import { Node, Runtime } from "./Runtime";
import { get, set } from "./Style";
import { arrow } from "./widgets/arrow";
import { blur } from "./widgets/blur";
import { button } from "./widgets/button";
import { checkbox } from "./widgets/checkbox";
import { portal } from "./widgets/portal";
import { spinner } from "./widgets/spinner";
import { window } from "./widgets/window";

declare const Plasma: (new (rootInstance: Instance) => Node) &
	Runtime & {
		useStyle: typeof get;
		setStyle: typeof set;

		automaticSize: typeof automaticSize;
		create: typeof create;

		window: typeof window;
		button: typeof button;
		portal: typeof portal;
		blur: typeof blur;
		spinner: typeof spinner;
		checkbox: typeof checkbox;
		arrow: typeof arrow;
	};

export = Plasma;
