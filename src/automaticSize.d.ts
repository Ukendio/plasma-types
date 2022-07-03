declare namespace automaticSize {
	interface LayoutOptions {
		axis?: Enum.AutomaticSize;
		maxSize?: UDim2;
	}
}

/**
 * Applies padding-aware automatic size to the given GUI instance. This function sets up events to listen to further
 * changes, so should only be called once per object.
 *
 * Also supports ScrollingFrames by correctly clamping actual and canvas sizes.
 *
 * @param container The instance to apply automatic sizing to.
 * @param options
 */
declare function automaticSize(container: GuiObject, options?: automaticSize.LayoutOptions): RBXScriptConnection;

export = automaticSize;
