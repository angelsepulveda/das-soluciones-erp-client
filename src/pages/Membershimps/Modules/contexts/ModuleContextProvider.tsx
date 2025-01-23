import { FC, ReactNode, useMemo, useState } from 'react';
import { ModuleContext } from './UseModuleContext';

export const ModuleContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleOpen = () => setOpen(!open);

	const value = useMemo(() => ({ open, handleOpen }), [open]);

	return (
		<ModuleContext.Provider value={value}>{children}</ModuleContext.Provider>
	);
};
