declare namespace automaticSize {
	interface LayoutOptions {
		axis?: Enum.AutomaticSize;
		maxSize?: UDim2;
	}
}

declare function automaticSize(container: GuiObject, options?: automaticSize.LayoutOptions): RBXScriptConnection;

export = automaticSize;
