declare namespace slider {
	interface SliderOptions {
		min?: number;
		max?: number;
		initial?: number;
	}
}

declare function slider(max: number): number;

declare function slider(options: slider.SliderOptions): number;

export = slider;
