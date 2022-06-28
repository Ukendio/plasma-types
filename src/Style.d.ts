interface DefaultStyle {
	bg1: Color3;
	bg2: Color3;
	bg3: Color3;
	mutedTextColor: Color3;
	textColor: Color3;
}

type Id<T> = T;

type PatchOverride<Base, Overrides> = Id<{
	[K in keyof Base | keyof Overrides]: K extends keyof Overrides
		? Overrides[K]
		: K extends keyof Base
		? Base[K]
		: never;
}>;

export function get<T extends { [index: string]: unknown } | undefined>(): PatchOverride<DefaultStyle, T>;

export function set<T extends { [index: string]: unknown }>(styleFragment: T): void;
