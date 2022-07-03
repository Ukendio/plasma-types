/**
 * A function that creates an Instance tree.
 *
 * CreateProps is a table:
 *
 * - String keys are interpreted as properties to set
 * - Numerical keys are interpreted as children
 * - Function values are interpreted as event handlers
 * - This function doesn't do anything special. It just creates an instance.
 *
 * ```lua
 * create("Frame", {
 * 	BackgroundTransparency = 1,
 * 	Name = "Checkbox",
 *
 * 	create("TextButton", {
 * 		BackgroundColor3 = Color3.fromRGB(54, 54, 54),
 * 		Size = UDim2.new(0, 30, 0, 30),
 *
 * 		create("UICorner", {
 * 			CornerRadius = UDim.new(0, 8),
 * 		}),
 *
 * 		Activated = function()
 * 			setClicked(true)
 * 		end,
 * 	}),
 * )
 * ```
 *
 * @param className The class name of the Instance to create
 * @param props
 * @returns The created instance
 */
declare function create<T extends keyof CreatableInstances>(
	className: T,
	props: Partial<WritableInstanceProperties<CreatableInstances[T]>> & {
		[index: number]: Instance;
	} & Partial<{
			[index in InstanceEventNames<CreatableInstances[T]>]: (
				...args: InstanceEvents<CreatableInstances[T]>[index] extends RBXScriptSignal<(...args: infer U) => {}>
					? U
					: never
			) => void;
		}>,
): Instances[T];

export = create;
