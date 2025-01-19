import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ReactNode } from 'react';

type TPaperCustom = {
	children: ReactNode;
};

export const PaperCustom = ({ children }: TPaperCustom) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid size={12}>{children}</Grid>
			</Grid>
		</Box>
	);
};
