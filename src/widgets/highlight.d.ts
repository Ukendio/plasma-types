declare namespace highlight {
	interface HighlightOptions {
		outlineColor?: Color3;
		fillColor?: Color3;
		fillTransparency?: number;
		outlineTransparency?: number;
		fillMode?: Enum.HighlightDepthMode;
	}
}

declare function highlight(adornee: PVInstance | Attachment, options: highlight.HighlightOptions): void;

export = highlight;
