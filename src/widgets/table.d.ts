declare namespace table {
	interface TableOptions {
		marginTop?: number;
		selectable?: boolean;
		font?: Enum.Font;
	}

	interface TableHandle {
		selected(): boolean;
	}
}

declare function table(
	items: ReadonlyArray<ReadonlyArray<string | (() => void)>>,
	options: table.TableOptions,
): table.TableHandle;

export = table;
