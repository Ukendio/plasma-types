declare namespace row {
	interface RowOptions {
		padding?: Vector2;
	}
}

declare function row(children: () => void): void;

declare function row(options: row.RowOptions, children: () => void): void;

export = row;
