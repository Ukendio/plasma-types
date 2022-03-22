interface CheckboxWidgetHandle {
	checked(): boolean;
}

export function checkbox(label: string, options?: { checked?: boolean; disabled?: boolean }): CheckboxWidgetHandle;
