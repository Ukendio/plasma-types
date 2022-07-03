declare namespace button {
	interface ButtonHandle {
		clicked: () => boolean;
	}
}

declare function button(label: string): button.ButtonHandle;

export = button;
