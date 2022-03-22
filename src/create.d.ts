export function create<T extends keyof CreatableInstances>(
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
