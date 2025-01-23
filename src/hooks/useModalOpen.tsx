import { useState } from 'react';

export const UseModalOpen = () => {
	const [open, setOpen] = useState<boolean>(false);

	const handleOpen = (): void => {
		setOpen(!open);
	};

	return {
		open,
		handleOpen,
	};
};
