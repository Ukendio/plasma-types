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
	createContext<T>(name: string): Context<T>;

	useContext<T>(context: Context<T>): T;

	provideContext<T>(context: Context<T>, value: T): void;

	useEffect(callback: () => (() => void) | void, ...dependencies: Array<unknown>): void;

	useState<T>(initialValue: T): LuaTuple<[T, (newValue: T | ((currentValue: T) => T)) => void]>;

	useInstance<T extends Instance>(creator: () => T): T;

	start<T extends Array<unknown>>(rootNode: Node, callback: (...args: T) => void, ...args: T): PlasmaStackFrame;

	continue<T extends Array<unknown>>(frame: PlasmaStackFrame, fn: () => void, ...args: T): void;

	scope<T extends Array<unknown>>(callback: (...args: T) => void, ...args: T): void;

	widget<T extends Array<unknown>>(callback: (...args: T) => void): (...args: T) => void;
}
