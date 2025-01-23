import { SxProps, Theme } from '@mui/material';

export type TFormInputProps = {
	name: string;
	control: any;
	label: string;
	setValue?: any;
	sx?: SxProps<Theme>;
};
