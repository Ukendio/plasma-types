interface CheckboxWidgetHandle {
	checked(): boolean;
	clicked(): boolean;
}

declare function checkbox(label: string, options?: { checked?: boolean; disabled?: boolean }): CheckboxWidgetHandle;

export = checkbox;
