// Define el tipo para el contexto
import { createContext } from 'react';

type TModuleContext = {
	open: boolean;
	handleOpen: VoidFunction;
};

export const ModuleContext = createContext<TModuleContext>({
	open: false,
	handleOpen: () => {},
});
