import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { ReactNode } from 'react';

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

type TModalCustomProps = {
	open: boolean;
	handleSetOpen: VoidFunction;
	children: ReactNode;
	title: string;
	handleSubmit: any;
};

export const ModalCrud = ({
	open,
	handleSetOpen,
	children,
	title,
	handleSubmit,
}: TModalCustomProps) => {
	return (
		<BootstrapDialog
			onClose={handleSetOpen}
			aria-labelledby="customized-dialog-title"
			open={open}
			maxWidth="md"
		>
			<DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
				{title}
			</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={handleSetOpen}
				sx={theme => ({
					position: 'absolute',
					right: 8,
					top: 8,
					color: theme.palette.grey[500],
				})}
			>
				<CloseIcon />
			</IconButton>
			<DialogContent dividers>{children}</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={handleSubmit}>
					Guardar
				</Button>
			</DialogActions>
		</BootstrapDialog>
	);
};
