import Grid from '@mui/material/Grid2';
import { ModuleContextProvider } from './contexts';
import { DataGridDesktopModule, DeleteModule, FormModule } from './components';

export const ModulesContainer = () => {
	return (
		<ModuleContextProvider>
			<Grid container>
				<Grid size={12}>
					<DataGridDesktopModule />
				</Grid>
				<FormModule />
				<DeleteModule />
			</Grid>
		</ModuleContextProvider>
	);
};
