declare namespace checkbox {
	interface CheckboxOptions {
		checked?: boolean;
		disabled?: boolean;
	}

	interface CheckboxHandle {
		checked(): boolean;
		clicked(): boolean;
	}
}

/**
 * A checkbox. A checkbox may either be controlled or uncontrolled.
 *
 * By passing the `checked` field in `options`, you make the checkbox controlled. Controlling the checkbox means that
 * the checked state is controlled by your code. Otherwise, the controlled state is controlled by the widget itself.
 *
 * Returns a widget handle, which has the fields:
 * - `checked`, a function you can call to check if the checkbox is checked
 * - `clicked`, a function you can call to check if the checkbox was clicked this frame
 *
 * ![](https://i.eryn.io/2150/9Yg31gc8.png)
 *
 * ```lua
 * Plasma.window("Checkboxes", function()
 * 	if Plasma.checkbox("Controlled checkbox", {
 * 		checked = checked,
 * 	}):clicked() then
 * 		checked = not checked
 * 	end
 *
 * 	Plasma.checkbox("Disabled checkbox", {
 * 		checked = checked,
 * 		disabled = true,
 * 	})
 *
 * 	Plasma.checkbox("Uncontrolled checkbox")
 * end)
 * ```
 *
 * @param label The label for the checkbox
 */
declare function checkbox(label: string, options?: checkbox.CheckboxOptions): checkbox.CheckboxHandle;

export = checkbox;
