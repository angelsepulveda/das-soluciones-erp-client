import { useContext } from 'react';
import { ModuleContext } from '../contexts';
import { ModalCrud } from '../../../../components';
import { Box } from '@mui/material';
import { FormInputText } from '../../../../components/UI/FormComponents';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
	const { open, handleOpen } = useContext(ModuleContext);

	const { handleSubmit, control } = useForm<TFormValues>({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			name: '',
		},
	});

	const onSubmit = (data: TFormValues) => {
		console.log('onSubmit', data);
	};

	return (
		<ModalCrud
			open={open}
			handleSetOpen={handleOpen}
			title="Registrar modulo"
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
