import { FC, ReactNode, useMemo, useState } from 'react';
import { ModuleContext } from './UseModuleContext';

export const ModuleContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [open, setOpen] = useState<boolean>(false);
	const [idDelete, setIdDelete] = useState<string>('')
	const [openDelete, setOpenDelete] = useState<boolean>(false)

	const handleSetDelete = (value: string) => {
		setIdDelete(value)
	}

	const handleOpen = () => setOpen(!open);
	const handleOpenDelete = () => setOpenDelete(!openDelete);

	const value = useMemo(() => ({ open, handleOpen, idDelete, handleSetDelete, openDelete, handleOpenDelete }), [open, idDelete]);

	return (
		<ModuleContext.Provider value={value}>{children}</ModuleContext.Provider>
	);
};
