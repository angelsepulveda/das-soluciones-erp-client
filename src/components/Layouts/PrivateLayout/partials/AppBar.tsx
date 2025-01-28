import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { drawerWidth } from '../constants';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { SetStateAction, useState } from 'react';
import { Theme } from '@mui/material';

type TAppBarCustomProps = {
	open?: boolean;
};

const AppBarCustom = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open',
})<TAppBarCustomProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

type TAppBarProps = {
	open?: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
	colorMode: {
		toggleColorMode: VoidFunction;
	};
	theme: Theme;
};

export const AppBar = ({ open, setOpen, colorMode, theme }: TAppBarProps) => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = (): void => {
		setAnchorElUser(null);
	};

	return (
		<AppBarCustom
			position="fixed"
			open={open}
			sx={{
				backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : 'white', // Cambia el color de fondo según el tema
				color: theme.palette.mode === 'dark' ? 'white' : 'black', // Cambia el color del texto según el tema
			}}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					sx={{ mr: 2, ...(open && { display: 'none' }) }}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
					DeviasKit
				</Typography>
				<IconButton
					sx={{ ml: 1 }}
					onClick={colorMode.toggleColorMode}
					color="inherit"
				>
					{theme.palette.mode === 'dark' ? (
						<Brightness7Icon />
					) : (
						<Brightness4Icon />
					)}
				</IconButton>
				<Tooltip title="Open settings">
					<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
						<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
					</IconButton>
				</Tooltip>
				<Menu
					sx={{ mt: '45px' }}
					id="menu-appbar"
					anchorEl={anchorElUser}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					open={Boolean(anchorElUser)}
					onClose={handleCloseUserMenu}
				>
					<MenuItem onClick={handleCloseUserMenu}>
						<Typography textAlign="center">Profile</Typography>
					</MenuItem>
					<MenuItem onClick={handleCloseUserMenu}>
						<Typography textAlign="center">Account</Typography>
					</MenuItem>
					<MenuItem onClick={handleCloseUserMenu}>
						<Typography textAlign="center">Logout</Typography>
					</MenuItem>
				</Menu>
			</Toolbar>
		</AppBarCustom>
	);
};
