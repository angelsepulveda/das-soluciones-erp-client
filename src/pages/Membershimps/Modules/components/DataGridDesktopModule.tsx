import { useContext, useMemo } from 'react';

import { type MRT_ColumnDef } from 'material-react-table';
import { DataGridCustom } from '../../../../components';
import { ModuleContext } from '../contexts';
import useSWR from 'swr';
import { getAll, modulesEndpoint } from '../../../../services';
import { TModuleDto } from '../../../../models';

export const DataGridDesktopModule = () => {
	const { handleOpen, handleSetDelete, handleOpenDelete, handleEditModule } =
		useContext(ModuleContext);
	const { data, isLoading } = useSWR(modulesEndpoint, getAll);

	const columns = useMemo<MRT_ColumnDef<TModuleDto>[]>(
		() => [
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
		<DataGridCustom<TModuleDto>
			isLoading={isLoading}
			data={data ?? []}
			columns={columns}
			onAdd={handleAdd}
			onEdit={handleEdit}
			onDelete={handleDelete}
		/>
	);
};
