declare namespace checkbox {
	interface CheckboxOptions {
		checked?: boolean;
		disabled?: boolean;
	}

	interface CheckboxHandle {
		checked(): boolean;
		clicked(): boolean;
	}
}

declare function checkbox(label: string, options?: checkbox.CheckboxOptions): checkbox.CheckboxHandle;

export = checkbox;
