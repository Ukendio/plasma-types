declare namespace heading {
	interface HeadingOptions {
		font?: Enum.Font;
	}
}

declare function heading(text: string, options?: heading.HeadingOptions): void;

export = heading;
