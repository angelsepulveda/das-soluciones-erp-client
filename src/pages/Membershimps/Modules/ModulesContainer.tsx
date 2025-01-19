import { DataGridDesktopModule } from './components';
import Grid from '@mui/material/Grid2';

export const ModulesContainer = () => {
	return (
		<Grid container>
			<Grid size={12}>
				<DataGridDesktopModule />
			</Grid>
		</Grid>
	);
};
