interface ButtonWidgetHandle {
	clicked(): boolean;
}

export function button(label: string): ButtonWidgetHandle;
