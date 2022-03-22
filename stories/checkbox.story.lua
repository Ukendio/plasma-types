local RunService = game:GetService("RunService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Plasma = require(ReplicatedStorage.Plasma)
local window = Plasma.window
local checkbox = Plasma.checkbox

return function(target)
	local root = Plasma.new(target)

	local checked = false

	local connection = RunService.Heartbeat:Connect(function()
		Plasma.start(root, function()
			window("Checkboxes", function()
				if checkbox("Controlled checkbox", {
					checked = checked,
				}):clicked() then
					checked = not checked
				end

				checkbox("Disabled checkbox", {
					checked = checked,
					disabled = true,
				})

				checkbox("Uncontrolled checkbox")
			end)
		end)
	end)

	return function()
		connection:Disconnect()
		Plasma.start(root, function() end)
	end
end
