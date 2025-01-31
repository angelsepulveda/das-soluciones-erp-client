import { useContext } from 'react';
import { ModuleContext } from '../contexts';
import { DeleteDialog } from '../../../../components';
import { deleteModule, modulesEndpoint } from '../../../../services';
import useSWRMutation from 'swr/mutation';
import { useSWRConfig } from 'swr';

export const DeleteModule = () => {
	const { handleOpenDelete, openDelete, name, idDelete } =
		useContext(ModuleContext);
	const { mutate } = useSWRConfig();

	const { trigger: deleting, isMutating: isLoading } = useSWRMutation(
		[modulesEndpoint.modules],
		(_, { arg }: { arg: string }) => deleteModule(arg),
	);

	const handleDelete = (): void => {
		deleting(idDelete)
			.then(() => {
				console.log('pasa');
				mutate(modulesEndpoint.modules);
				handleOpenDelete();
			})
			.catch(err => {
				console.log('pasa');
				console.log(err, 'error');
			});
	};

	return (
		<DeleteDialog
			handleClose={() => handleOpenDelete()}
			handleOk={() => handleDelete()}
			title="Eliminar registro"
			message={`¿Esta seguro de eliminar el registro ${name}?`}
			open={openDelete}
			isLoading={isLoading}
		/>
	);
};
