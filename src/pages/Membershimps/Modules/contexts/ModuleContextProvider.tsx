import { FC, ReactNode, useMemo, useState } from 'react';
import { ModuleContext } from './UseModuleContext';
import { TModuleDto } from '../../../../models';

export const ModuleContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [open, setOpen] = useState<boolean>(false);
	const [idDelete, setIdDelete] = useState<string>('');
	const [openDelete, setOpenDelete] = useState<boolean>(false);
	const [name, setName] = useState<string>('');
	const [moduleEdit, setModuleEdit] = useState<TModuleDto | null>(null);

	const handleSetDelete = (value: string, name: string): void => {
		setIdDelete(value);
		setName(name);
	};

	const handleOpen = () => {
		setOpen(!open);
	};

	const handleOpenDelete = () => {
		setOpenDelete(!openDelete);
	};

	const handleCloseDelete = () => {
		setOpenDelete(false);
		setIdDelete('');
	};

	const handleEditModule = (id: string, name: string): void => {
		setModuleEdit({
			id,
			name,
		});
		setOpen(true);
	};

	const handleOpenClose = () => {
		setModuleEdit(null);
		setOpen(false);
	};

	const value = useMemo(
		() => ({
			name,
			open,
			handleOpen,
			idDelete,
			handleSetDelete,
			openDelete,
			handleOpenDelete,
			moduleEdit,
			handleEditModule,
			handleOpenClose,
			handleCloseDelete,
		}),
		[open, idDelete, name, openDelete, name, moduleEdit],
	);

	return (
		<ModuleContext.Provider value={value}>{children}</ModuleContext.Provider>
	);
};
