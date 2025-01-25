// Define el tipo para el contexto
import { createContext } from 'react';
import { TModuleDto } from '../../../../models';

type TModuleContext = {
	open: boolean;
	handleOpen: VoidFunction;
	idDelete: string;
	handleSetDelete: (value: string, name: string) => void;
	handleEditModule: (value: string, name: string) => void;
	openDelete: boolean;
	handleOpenDelete: VoidFunction;
	name: string;
	moduleEdit: TModuleDto | null;
	handleOpenClose: VoidFunction;
};

export const ModuleContext = createContext<TModuleContext>({
	open: false,
	handleOpen: () => {},
	idDelete: '',
	handleSetDelete: () => {},
	openDelete: false,
	handleOpenDelete: () => {},
	name: '',
	moduleEdit: null,
	handleEditModule: () => {},
	handleOpenClose: () => {},
});
