declare namespace window {
	interface WindowOptions {
		title?: string;
		closable?: boolean;
		movable?: boolean;
		resizable?: boolean;
	}

	interface WindowHandle {
		closed(): boolean;
	}
}

/**
 * A window widget. Contains children.
 *
 * ![](https://i.eryn.io/2150/TVkkOnxj.png)
 */
declare function window(title: string, children: () => void): window.WindowHandle;
declare function window(options: window.WindowOptions, children: () => void): window.WindowHandle;

export = window;
