import { TFormInputProps } from './formInputProps.ts';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export const FormInputText = ({
	name,
	control,
	label,
	sx,
}: TFormInputProps) => {
	return (
		<Controller
			render={renderProps => (
				<TextField
					size="small"
					onChange={renderProps.field.onChange}
					value={renderProps.field.value}
					error={!!renderProps.fieldState.error}
					helperText={renderProps.fieldState.error?.message ?? null}
					fullWidth
					label={label}
					variant="standard"
					sx={sx}
				/>
			)}
			name={name}
			control={control}
		/>
	);
};
