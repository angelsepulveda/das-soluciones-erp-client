import { Navigation } from '@toolpad/core/AppProvider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LabelIcon from '@mui/icons-material/Label';

export const NavigationItems: Navigation = [
	{
		segment: 'dashboard',
		title: 'Dashboard',
		icon: <DashboardIcon />,
	},
	{
		segment: 'memberships',
		title: 'Membresia',
		icon: <LoyaltyIcon />,
		children: [
			{
				segment: 'modules',
				title: 'Modulos',
				icon: <LabelIcon />,
			},
		],
	},
];
