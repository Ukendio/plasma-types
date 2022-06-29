import { arrow } from "./arrow";
import { blur } from "./blur";
import { button } from "./button";
import { checkbox } from "./checkbox";
import { heading } from "./heading";
import { label } from "./label";
import { portal } from "./portal";
import { row } from "./row";
import { slider } from "./slider";
import { space } from "./space";
import { spinner } from "./spinner";
import { window } from "./window";

export type Widgets = {
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
};
