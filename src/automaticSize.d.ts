interface LayoutOptions {
	axis?: Enum.AutomaticSize;
	maxSize?: UDim2;
}

export function automaticSize(container: GuiObject, options?: LayoutOptions): RBXScriptConnection;
