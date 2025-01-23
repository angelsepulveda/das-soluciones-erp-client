import { DataGridDesktopModule, FormModule } from './components';
import Grid from '@mui/material/Grid2';
import { ModuleContextProvider } from './contexts';

export const ModulesContainer = () => {
	return (
		<ModuleContextProvider>
			<Grid container>
				<Grid size={12}>
					<DataGridDesktopModule />
				</Grid>
				<FormModule />
			</Grid>
		</ModuleContextProvider>
	);
};
