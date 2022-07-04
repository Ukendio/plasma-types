declare namespace Runtime {
	type EventCallback = <T extends Array<unknown>>(
		instance: Instance,
		discriminator: string,
		fn: (...args: T) => void,
	) => void;

	type Context<T> = T & {
		/**
		 * @hidden
		 * @deprecated
		 */
		readonly _nominal_Context: unique symbol;
	};

	type Node = {
		/**
		 * @hidden
		 * @deprecated
		 */
		readonly _nominal_Node: unique symbol;

		instance?: Instance;
		containerInstance?: Instance;
		effects: {
			[TopoKey: Runtime.TopoKey]: {
				lastDependencies?: Array<unknown>;
				lastDependenciesLength: number;
				destructor?: () => void;
			};
		};
		states: { [TopoKey: Runtime.TopoKey]: unknown };
		children: { [TopoKey: Runtime.TopoKey]: Runtime.Node };
		generation: number;
	};

	type TopoKey = string;

	type PlasmaStackFrame = {
		node: Runtime.Node;
		contextValues: Set<Runtime.Context<unknown>>;
		childrenCount: number;
		effectCounts: Map<Runtime.TopoKey, number>;
		stateCounts: Map<Runtime.TopoKey, number>;
		childCounts: Map<Runtime.TopoKey, number>;
	};
}

interface Runtime {
	/**
	 * Begins a new frame for this Plasma instance. The `callback` is invoked immediately. Code run in the `callback`
	 * function that uses plasma APIs will be associated with this Plasma node. The `callback` function is **not allowed
	 * to yield**.
	 *
	 * @param rootNode A node created by `new Plasma()`.
	 * @param args -- Additional parameters to `callback`
	 */
	start<T extends Array<unknown>>(
		this: void,
		rootNode: Runtime.Node,
		callback: (...args: T) => void,
		...args: T
	): Runtime.PlasmaStackFrame;

	continueFrame<T extends Array<unknown>>(
		this: void,
		continueHandle: Runtime.PlasmaStackFrame,
		fn: (...args: T) => void,
		...args: T
	): void;

	beginFrame<T extends ReadonlyArray<unknown>>(
		this: void,
		rootNode: Runtime.Node,
		fn: (...args: T) => void,
		...args: T
	): Runtime.PlasmaStackFrame;

	finishFrame(this: void, rootNode: Runtime.Node): void;

	scope<T extends ReadonlyArray<unknown>>(this: void, callback: (...args: T) => void, ...args: T): void;

	widget<T extends ReadonlyArray<unknown>, C>(this: void, callback: (...args: T) => C): (...args: T) => C;

	/**
	 * ```lua
	 * local checked, setChecked = useState(false)
	 *
	 * useInstance(function()
	 * 	local TextButton = Instance.new("TextButton")
	 *
	 * 	TextButton.Activated:Connect(function()
	 * 		setChecked(not checked)
	 * 	end)
	 *
	 * 	return TextButton
	 * end)
	 *
	 * TextButton.Text = if checked then "X" else ""
	 * ```
	 *
	 * @param initialValue The value this hook returns if the set callback has never been called
	 */
	useState<T>(this: void, initialValue: T): LuaTuple<[T, (newValue: T | ((currentValue: T) => T)) => void]>;

	/**
	 * `useInstance` takes a callback which should be used to create the initial UI for the widget.
	 * The callback is only ever invoked on the first time this widget runs and never again.
	 * The callback should return the instance it created.
	 * The callback can optionally return a second value, which is the instance where children of this widget should be
	 * placed. Otherwise, children are placed in the first instance returned.

 	 * `useInstance` returns the `ref` table that is passed to it. You can use this to create references to objects
	 * you want to update in the widget body.
	 */
	useInstance<T extends object>(this: void, creator: (ref: T) => Instance | LuaTuple<[Instance, GuiObject?]>): T;

	useEffect(this: void, callback: () => (() => void) | void, ...dependencies: ReadonlyArray<unknown>): void;

	useKey(this: void, key: string | number): void;

	setEventCallback(this: void, callback: Runtime.EventCallback): void;

	useEventCallback(this: void): Runtime.EventCallback | undefined;

	/**
	 * Creates a `Plasma.Context` object which is used to pass state downwards through the tree without needing to
	 * thread it through every child as props.
	 *
	 * @param name The human-readable name of the context. This is only for debug purposes.
	 * @returns An opqaue Context object which holds persistent state.
	 */
	createContext<T>(this: void, name: string): Runtime.Context<T>;

	/**
	 * Returns the value of this context provided by the most recent ancestor that used `provideContext` with this
	 * context.
	 *
	 * @param context A context object previously created with createContext
	 */
	useContext<T>(this: void, context: Runtime.Context<T>): T;

	/**
	 * Provides a value for this context for any subsequent uses of `useContext` in this scope.
	 *
	 * @param context A context object previously created with createContext
	 * @param value Any value you want to provide for this context
	 */
	provideContext<T>(this: void, context: Runtime.Context<T>, value: T): void;
}

declare const Runtime: Runtime;

export = Runtime;
