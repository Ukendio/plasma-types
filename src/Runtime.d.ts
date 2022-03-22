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

export function createContext<T>(name: string): Context<T>;

export function useContext<T>(context: Context<T>): T;

export function provideContext<T>(context: Context<T>, value: T): void;

export function useEffect(callback: () => (() => void) | void, ...dependencies: Array<unknown>): void;

export function useState<T>(initialValue: T): LuaTuple<[T, (newValue: T | ((currentValue: T) => T)) => void]>;

export function useInstance<T extends Instance>(creator: () => T): T;

export function start<T extends Array<unknown>>(rootNode: Node, callback: (...args: T) => void, ...args: T): void;

export function scope<T extends Array<unknown>>(callback: (...args: T) => void, ...args: T): void;

export function widget<T extends Array<unknown>>(callback: (...args: T) => void): (...args: T) => void;
