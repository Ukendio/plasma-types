import automaticSize from "./automaticSize";
import create from "./create";
import hydrateAutomaticSize from "./hydrateAutomaticSize";
import Runtime from "./Runtime";
import Style from "./Style";
import arrow from "./widgets/arrow";
import blur from "./widgets/blur";
import button from "./widgets/button";
import checkbox from "./widgets/checkbox";
import heading from "./widgets/heading";
import highlight from "./widgets/highlight";
import label from "./widgets/label";
import portal from "./widgets/portal";
import row from "./widgets/row";
import slider from "./widgets/slider";
import space from "./widgets/space";
import spinner from "./widgets/spinner";
import table from "./widgets/table";
import window from "./widgets/window";

declare namespace Plasma {
	type Node = Runtime.Node;
	type Context<T> = Runtime.Context<T>;
	type EventCallback = Runtime.EventCallback;
	type PlasmaStackFrame = Runtime.PlasmaStackFrame;
	type TopoKey = Runtime.TopoKey;

	type DefaultStyle = Style.DefaultStyle;
	type PatchOverride<Base, Overrides> = Style.PatchOverride<Base, Overrides>;

	type ButtonHandle = button.ButtonHandle;

	type CheckboxOptions = checkbox.CheckboxOptions;
	type CheckboxHandle = checkbox.CheckboxHandle;

	type RowOptions = row.RowOptions;

	type TableOptions = table.TableOptions;

	type WindowOptions = window.WindowOptions;
	type WindowHandle = window.WindowHandle;

	type HighlightOptions = highlight.HighlightOptions;

	interface Widgets {
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
		highlight: typeof highlight;
	}
}

interface Plasma extends Plasma.Widgets {
	/**
	 * @param rootInstance The root instance of which to mount all children. Likely a ScreenGui.
	 * @returns An opaque object which holds persistent state about your UI.
	 */
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
}

declare const Plasma: Plasma;

export = Plasma;
