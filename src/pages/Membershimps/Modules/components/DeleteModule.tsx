import { useContext } from 'react';
import { ModuleContext } from '../contexts';
import { DeleteDialog } from '../../../../components';

export const DeleteModule = () => {
	const { handleOpenDelete, openDelete, name } = useContext(ModuleContext);

	return (
		<DeleteDialog
			handleClose={() => handleOpenDelete()}
			handleOk={() => {}}
			title="Eliminar registro"
			message={`¿Esta seguro de eliminar el registro ${name}?`}
			open={openDelete}
		/>
	);
};
