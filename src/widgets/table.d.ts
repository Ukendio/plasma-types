declare namespace table {
	interface TableOptions {
		marginTop?: number;
	}
}

declare function table(items: ReadonlyArray<ReadonlyArray<string>>, options: table.TableOptions): Frame;

export = table;
