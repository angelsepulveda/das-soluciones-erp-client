import CardMembershipIcon from '@mui/icons-material/CardMembership';

export type MenuItem = {
	text: string;
	icon: JSX.Element;
	children?: MenuItem[];
};

export const menuItems: MenuItem[] = [
	{
		text: 'Membresias',
		icon: <CardMembershipIcon />,
		children: [{ text: 'Modulos', icon: <CardMembershipIcon /> }],
	},
];
