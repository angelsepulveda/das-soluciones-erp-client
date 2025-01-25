// Define el tipo para el contexto
import { createContext } from 'react';

type TModuleContext = {
	open: boolean;
	handleOpen: VoidFunction;
	idDelete: string
	handleSetDelete: (value: string) => void
	openDelete: boolean
	handleOpenDelete: VoidFunction
};

export const ModuleContext = createContext<TModuleContext>({
	open: false,
	handleOpen: () => {},
	idDelete: '',
	handleSetDelete: (value: string) => {},
	openDelete: false,
	handleOpenDelete: () => {},
});
