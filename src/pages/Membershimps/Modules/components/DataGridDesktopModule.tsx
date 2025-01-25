import { useContext, useMemo } from 'react';

import { type MRT_ColumnDef } from 'material-react-table';
import { DataGridCustom } from '../../../../components';
import { ModuleContext } from '../contexts';

export const DataGridDesktopModule = () => {
	const { handleOpen, handleSetDelete, handleOpenDelete, handleEditModule } =
		useContext(ModuleContext);

	const data = useMemo(
		() => [
			{ id: 1, name: 'Module 1' },
			{ id: 2, name: 'Module 2' },
		],
		[],
	);

	const columns = useMemo<MRT_ColumnDef<{ id: number; name: string }>[]>(
		() => [
			{
				accessorKey: 'id',
				header: 'ID',
				visible: false,
			},
			{
				accessorKey: 'name',
				header: 'Nombre',
			},
		],
		[],
	);

	const handleAdd = (): void => {
		handleOpen();
	};

	const handleEdit = (row: { id: string; name: string }): void => {
		handleEditModule(row.id, row.name);
	};

	const handleDelete = (row: { id: string; name: string }): void => {
		handleSetDelete(row.id, row.name);
		handleOpenDelete();
	};

	return (
		<DataGridCustom
			data={data}
			columns={columns}
			onAdd={handleAdd}
			onEdit={handleEdit}
			onDelete={handleDelete}
		/>
	);
};
