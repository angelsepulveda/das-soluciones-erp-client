import { useMemo } from 'react';

import { type MRT_ColumnDef } from 'material-react-table';
import { DataGridCustom } from '../../../../components';

export const DataGridDesktopModule = () => {
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
			},
			{
				accessorKey: 'name',
				header: 'Nombre',
			},
		],
		[],
	);

	const handleAdd = () => {
		console.log('Agregar nuevo módulo');
	};

	const handleEdit = (row: { id: number; name: string }) => {
		console.log('Editar', row);
	};

	const handleDelete = (row: { id: number; name: string }) => {
		console.log('Eliminar', row);
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
