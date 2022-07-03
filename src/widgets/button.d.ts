declare namespace button {
	export interface ButtonHandle {
		clicked(): boolean;
	}
}

declare function button(label: string): button.ButtonHandle;

export = button;
