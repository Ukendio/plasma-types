interface CheckboxWidgetHandle {
	checked(): boolean;
	clicked(): boolean;
}

export function checkbox(label: string, options?: { checked?: boolean; disabled?: boolean }): CheckboxWidgetHandle;
