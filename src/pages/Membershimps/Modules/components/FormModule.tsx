import { useContext, useEffect } from 'react';
import { ModuleContext } from '../contexts';
import { ModalCrud } from '../../../../components';
import { Box } from '@mui/material';
import { FormInputText } from '../../../../components/UI/FormComponents';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TRegisterModulePayload } from '../../../../models';
import { modulesEndpoint, registerModule } from '../../../../services';
import useSWRMutation from 'swr/mutation';
import { useSWRConfig } from 'swr';

const validationSchema = yup.object({
	name: yup
		.string()
		.required('Es requerido')
		.max(50, 'No puede superar los 50 caracteres'),
});

type TFormValues = {
	name: string;
};

export const FormModule = () => {
	const { open, moduleEdit, handleOpenClose } = useContext(ModuleContext);
	const { mutate } = useSWRConfig();
	const { trigger: register, isMutating: isLoadingRegister } = useSWRMutation(
		[modulesEndpoint.modules],
		(_, { arg }: { arg: TRegisterModulePayload }) => registerModule(arg),
	);

	const { handleSubmit, control, setValue, reset } = useForm<TFormValues>({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			name: '',
		},
	});

	useEffect(() => {
		if (moduleEdit != null) {
			setValue('name', moduleEdit.name);
		}
	}, [moduleEdit]);

	useEffect(() => {
		if (!open) {
			reset();
		}
	}, [open]);

	const onSubmit = (data: TFormValues) => {
		const payload: TRegisterModulePayload = {
			name: data.name,
		};
		register(payload)
			.then(() => {
				mutate(modulesEndpoint.modules);
				handleOpenClose();
			})
			.catch(err => {
				console.log(err, 'erropp');
			});
	};

	return (
		<ModalCrud
			open={open}
			handleSetOpen={handleOpenClose}
			title="Registrar modulo"
			isLoading={isLoadingRegister}
			handleSubmit={handleSubmit(onSubmit)}
		>
			<Box
				style={{
					display: 'grid',
					padding: '10px',
					width: '400px',
				}}
			>
				<form>
					<FormInputText name="name" control={control} label="Nombre" />
				</form>
			</Box>
		</ModalCrud>
	);
};
