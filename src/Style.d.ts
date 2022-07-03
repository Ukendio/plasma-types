declare namespace Style {
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
}

interface Style {
	/**
	 * Returns the current style information, with styles that are set more recently in the tree overriding styles that
	 * were set further up. In this way, styles cascade downwards, similar to CSS.
	 */
	get<T extends { [index: string]: unknown } | undefined>(this: void): Style.PatchOverride<Style.DefaultStyle, T>;

	/**
	 * Defines style for any subsequent calls in this scope. Merges with any existing styles.
	 * @param styleFragment A dictionary of style information
	 */
	set<T extends { [index: string]: unknown }>(this: void, styleFragment: T): void;
}

declare const Style: Style;

export = Style;
