declare namespace button {
	interface ButtonHandle {
		clicked(): boolean;
	}
}

/**
 * A text button.
 *
 * Returns a widget handle, which has the field:
 * - `clicked`, a function you can call to check if the checkbox was clicked this frame
 *
 * ![](https://i.eryn.io/2150/RobloxStudioBeta-iwRM0RMx.png)
 *
 * ```lua
 * Plasma.window("Button", function()
 * 	if Plasma.button("button text"):clicked() then
 * 		print("clicked!")
 * 	end
 * end)
 * ```
 *
 * @param label The label for the button
 */
declare function button(text: string): button.ButtonHandle;

export = button;
