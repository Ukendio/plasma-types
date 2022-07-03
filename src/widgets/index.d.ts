import arrow from "./arrow";
import blur from "./blur";
import button from "./button";
import checkbox from "./checkbox";
import error from "./error";
import heading from "./heading";
import label from "./label";
import portal from "./portal";
import row from "./row";
import slider from "./slider";
import space from "./space";
import spinner from "./spinner";
import table from "./table";
import window from "./window";

declare const Widgets: {
	arrow: typeof arrow;
	blur: typeof blur;
	button: typeof button;
	checkbox: typeof checkbox;
	error: typeof error;
	heading: typeof heading;
	label: typeof label;
	portal: typeof portal;
	row: typeof row;
	space: typeof space;
	slider: typeof slider;
	spinner: typeof spinner;
	table: typeof table;
	window: typeof window;
};

export = Widgets;
