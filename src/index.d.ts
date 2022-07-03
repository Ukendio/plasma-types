import automaticSize from "./automaticSize";
import create from "./create";
import hydrateAutomaticSize from "./hydrateAutomaticSize";
import Runtime from "./Runtime";
import Style from "./Style";
import window from "./widgets/window";
import button from "./widgets/button";
import portal from "./widgets/portal";
import blur from "./widgets/blur";
import row from "./widgets/row";
import spinner from "./widgets/spinner";
import checkbox from "./widgets/checkbox";
import arrow from "./widgets/arrow";
import heading from "./widgets/heading";
import label from "./widgets/label";
import slider from "./widgets/slider";
import space from "./widgets/space";
import table from "./widgets/table";

declare namespace Plasma {
	export type Node = Runtime.Node;
	export type Context<T> = Runtime.Context<T>;
	export type EventCallback = Runtime.EventCallback;
	export type PlasmaStackFrame = Runtime.PlasmaStackFrame;
	export type TopoKey = Runtime.TopoKey;

	export type ButtonHandle = button.ButtonHandle;

	export type CheckboxOptions = checkbox.CheckboxOptions;
	export type CheckboxHandle = checkbox.CheckboxHandle;

	export type RowOptions = row.RowOptions;

	export type TableOptions = table.TableOptions;

	export type WindowOptions = window.WindowOptions;
	export type WindowHandle = window.WindowHandle;
}

interface Plasma {
	new (rootInstance: Instance): Runtime.Node;

	start: typeof Runtime.start;
	continueFrame: typeof Runtime.continueFrame;
	beginFrame: typeof Runtime.beginFrame;
	finishFrame: typeof Runtime.finishFrame;
	scope: typeof Runtime.scope;
	widget: typeof Runtime.widget;
	useState: typeof Runtime.useState;
	useInstance: typeof Runtime.useInstance;
	useEffect: typeof Runtime.useEffect;
	useKey: typeof Runtime.useKey;
	setEventCallback: typeof Runtime.setEventCallback;

	useStyle: typeof Style.get;
	setStyle: typeof Style.set;

	automaticSize: typeof automaticSize;
	hydrateAutomaticSize: typeof hydrateAutomaticSize;
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
	table: typeof table;
}

declare const Plasma: Plasma;

export = Plasma;
