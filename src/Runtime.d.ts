declare namespace Runtime {
	export type EventCallback = <T extends Array<unknown>>(
		instance: Instance,
		discriminator: string,
		fn: (...args: T) => void,
	) => void;

	export type Context<T> = T & {
		/**
		 * @hidden
		 * @deprecated
		 */
		readonly _nominal_Context: unique symbol;
	};

	export type Node = {
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

	export type TopoKey = string;

	export type PlasmaStackFrame = {
		node: Runtime.Node;
		contextValues: Set<Runtime.Context<unknown>>;
		childrenCount: number;
		effectCounts: Map<Runtime.TopoKey, number>;
		stateCounts: Map<Runtime.TopoKey, number>;
		childCounts: Map<Runtime.TopoKey, number>;
	};
}

interface Runtime {
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

	beginFrame<T extends Array<unknown>>(
		this: void,
		rootNode: Runtime.Node,
		fn: (...args: T) => void,
		...args: T
	): Runtime.PlasmaStackFrame;

	finishFrame(this: void, rootNode: Runtime.Node): void;

	scope<T extends Array<unknown>>(this: void, callback: (...args: T) => void, ...args: T): void;

	widget<T extends Array<unknown>, C>(this: void, callback: (...args: T) => C): (...args: T) => C;

	useState<T>(this: void, initialValue: T): LuaTuple<[T, (newValue: T | ((currentValue: T) => T)) => void]>;

	useInstance<T extends Instance>(this: void, creator: () => T | LuaTuple<[T, GuiObject?]>): T;

	useEffect(this: void, callback: () => (() => void) | void, ...dependencies: Array<unknown>): void;

	useKey(this: void, key: string | number): void;

	setEventCallback(this: void, callback: Runtime.EventCallback): void;

	useEventCallback(this: void): Runtime.EventCallback | undefined;

	createContext<T>(this: void, name: string): Runtime.Context<T>;

	useContext<T>(this: void, context: Runtime.Context<T>): T;

	provideContext<T>(this: void, context: Runtime.Context<T>, value: T): void;
}

declare const Runtime: Runtime;

export = Runtime;
