/**
 * The portal widget creates its children inside the specified `targetInstance`. For example, you could use this to
 * create lighting effects in Lighting as a widget:
 *
 * ```lua
 * return function(size)
 * 	portal(Lighting, function()
 * 		useInstance(function()
 * 			local blur = Instance.new("BlurEffect")
 * 			blur.Size = size
 * 			return blur
 * 		end)
 * 	end)
 * end
 * ```
 *
 * @param targetInstance Where the portal goes to
 * @param children Children
 */
declare function portal(targetInstance: Instance, children: () => void): void;

export = portal;
