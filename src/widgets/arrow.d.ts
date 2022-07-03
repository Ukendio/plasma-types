/**
 * - `arrow(from: Vector3, to: Vector3)` -> Creates an arrow between `from` and `to`
 * - `arrow(point: Vector3)` -> Creates an arrow pointing at `point`
 * - `arrow(cframe: CFrame)` -> Creates an arrow with its point at the CFrame position facing the CFrame LookVector
 * - `arrow(part: BasePart)` -> Arrow represents the Part's CFrame
 * - `arrow(fromPart: BasePart, toPart: BasePart)` -> Arrow between the two parts
 *
 * ![](https://i.eryn.io/2150/arrows.png)
 *
 * ```lua
 * Plasma.arrow(Vector3.new(0, 0, 0))
 * Plasma.arrow(Vector3.new(5, 5, 5), Vector3.new(10, 10, 10))
 * ```
 */
declare function arrow(from: Vector3, to: Vector3, colour?: Color3): void;

declare function arrow(point: Vector3, colour?: Color3): void;

declare function arrow(cf: CFrame, colour?: Color3): void;

declare function arrow(part: BasePart, colour?: Color3): void;

declare function arrow(fromPart: BasePart, toPart: BasePart, colour?: Color3): void;

export = arrow;
