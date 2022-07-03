interface ButtonWidgetHandle {
	clicked(): boolean;
}

declare function button(label: string): ButtonWidgetHandle;

export = button;
