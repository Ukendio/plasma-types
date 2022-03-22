interface LayoutOptions {
	axis: Enum.AutomaticSize;
	maxSize: Vector2;
}

export function automaticSize(container: GuiObject, options?: LayoutOptions): RBXScriptConnection;
