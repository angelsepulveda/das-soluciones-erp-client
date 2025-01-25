import {
	MaterialReactTable,
	MRT_ColumnDef,
	MRT_RowData,
	useMaterialReactTable,
} from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import { Button, IconButton, Tooltip, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface GenericDataGridProps<T extends MRT_RowData> {
	data: T[];
	columns: MRT_ColumnDef<T>[];
	onAdd?: () => void;
	onEdit?: (row: { id: string; name: string }) => void;
	onDelete?: (row: { id: string; name: string }) => void;
}

export const DataGridCustom = <T extends MRT_RowData>({
	data,
	columns,
	onAdd,
	onEdit,
	onDelete,
}: GenericDataGridProps<T>) => {
	const table = useMaterialReactTable({
		columns,
		data,
		enableColumnOrdering: false,
		enableGrouping: false,
		enableFacetedValues: false,
		enableColumnFilters: false,
		enableRowOrdering: false,
		enableCellActions: false,
		enableColumnActions: false,
		enableSorting: false,
		localization: MRT_Localization_ES,
		enableRowActions: !!onEdit || !!onDelete,
		positionActionsColumn: 'last',
		initialState: {
			showColumnFilters: false,
			showGlobalFilter: false,
		},
		paginationDisplayMode: 'pages',
		positionToolbarAlertBanner: 'bottom',
		renderTopToolbarCustomActions: onAdd
			? () => (
					<Button
						variant="contained"
						size="small"
						startIcon={<AddIcon />}
						onClick={onAdd}
					>
						Nuevo
					</Button>
				)
			: undefined,
		renderRowActions:
			onEdit || onDelete
				? ({ row }) => (
						<Box sx={{ display: 'flex', gap: '1rem' }}>
							{onEdit && (
								<Tooltip title="Editar">
									<IconButton
										onClick={() => {
											// eslint-disable-next-line @typescript-eslint/ban-ts-comment
											// @ts-expect-error
											onEdit(row.original);
										}}
									>
										<EditIcon />
									</IconButton>
								</Tooltip>
							)}
							{onDelete && (
								<Tooltip title="Eliminar">
									<IconButton
										color="error"
										onClick={() => {
											// eslint-disable-next-line @typescript-eslint/ban-ts-comment
											// @ts-expect-error
											onDelete(row.original);
										}}
									>
										<DeleteIcon />
									</IconButton>
								</Tooltip>
							)}
						</Box>
					)
				: undefined,
	});

	return <MaterialReactTable table={table} />;
};
