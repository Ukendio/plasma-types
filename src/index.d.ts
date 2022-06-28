import { automaticSize } from "./automaticSize";
import { create } from "./create";
import { get, set } from "./Style";
import { arrow } from "./widgets/arrow";
import { blur } from "./widgets/blur";
import { button } from "./widgets/button";
import { checkbox } from "./widgets/checkbox";
import { heading } from "./widgets/heading";
import { label } from "./widgets/label";
import { portal } from "./widgets/portal";
import { row } from "./widgets/row";
import { slider } from "./widgets/slider";
import { space } from "./widgets/space";
import { spinner } from "./widgets/spinner";
import { window } from "./widgets/window";

declare const Plasma: (new (rootInstance: Instance) => Node) & {
	useStyle: typeof get;
	setStyle: typeof set;

	automaticSize: typeof automaticSize;
	create: typeof create;

	window: typeof window;
	button: typeof button;
	portal: typeof portal;
	blur: typeof blur;
	row: typeof row;
	spinner: typeof spinner;
	checkbox: typeof checkbox;
	arrow: typeof arrow;
	heading: typeof heading;
	label: typeof label;
	slider: typeof slider;
	space: typeof space;
} & Runtime;

export = Plasma;
