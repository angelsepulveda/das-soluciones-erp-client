import { Outlet } from 'react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { Box } from '@mui/material';

export function PrivateLayout() {
	return (
		<DashboardLayout>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Outlet />
			</Box>
		</DashboardLayout>
	);
}
