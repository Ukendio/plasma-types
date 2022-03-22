interface DefaultStyle {
	bg1: Color3;
	bg2: Color3;
	bg3: Color3;
	mutedTextColor: Color3;
	textColor: Color3;
}

export function get<T extends { [index: string]: unknown }>(): T | DefaultStyle;

export function set<T extends { [index: string]: unknown }>(styleFragment: T): void;
