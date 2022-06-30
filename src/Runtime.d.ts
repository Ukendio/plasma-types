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
	containerInstance: Instance;
	effects: {
		[TopoKey: string]: {
			lastDependencies?: Array<unknown>;
			lastDependenciesLength: number;
			destructor?: () => void;
		};
	};
	states: { [TopoKey: string]: unknown };
	children: { [TopoKey: string]: Node };
	generation: number;
};

type TopoKey = string;

type PlasmaStackFrame = {
	node: Node;
	contextValues: Set<Context<unknown>>;
	childrenCount: number;
	effectCounts: Map<TopoKey, number>;
	stateCounts: Map<TopoKey, number>;
	childCounts: Map<TopoKey, number>;
};

export interface Runtime {
	start<T extends Array<unknown>>(
		this: void,
		rootNode: Node,
		callback: (...args: T) => void,
		...args: T
	): PlasmaStackFrame;

	continueFrame<T extends Array<unknown>>(
		this: void,
		continueHandle: PlasmaStackFrame,
		fn: (...args: T) => void,
		...args: T
	): void;

	beginFrame<T extends Array<unknown>>(
		this: void,
		rootNode: Node,
		fn: (...args: T) => void,
		...args: T
	): PlasmaStackFrame;

	finishFrame(this: void, rootNode: Node): void;

	scope<T extends Array<unknown>>(this: void, callback: (...args: T) => void, ...args: T): void;

	widget<T extends Array<unknown>, C>(this: void, callback: (...args: T) => C): (...args: T) => C;

	useState<T>(this: void, initialValue: T): LuaTuple<[T, (newValue: T | ((currentValue: T) => T)) => void]>;

	useInstance<T extends Instance>(this: void, creator: () => T | LuaTuple<[T, GuiObject?]>): T;

	useEffect(this: void, callback: () => (() => void) | void, ...dependencies: Array<unknown>): void;

	useKey(this: void, key: string | number): void;

	setEventCallback(this: void, callback: EventCallback): void;

	useEventCallback(this: void): EventCallback | undefined;

	createContext<T>(this: void, name: string): Context<T>;

	useContext<T>(this: void, context: Context<T>): T;

	provideContext<T>(this: void, context: Context<T>, value: T): void;
}

export type EventCallback = <T extends Array<unknown>>(
	instance: Instance,
	discriminator: string,
	fn: (...args: T) => void,
) => void;
