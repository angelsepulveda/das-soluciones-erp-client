import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Container } from '@mui/material';
import { Outlet } from 'react-router';
import { AppBar, DrawerHeader, Main, MenuSidebar } from './partials';
import { drawerWidth } from './constants';
import { UseThemeApp } from '../../../themes';

export const PrivateLayout = () => {
	const [open, setOpen] = useState<boolean>(false);
	const { theme, colorMode } = UseThemeApp();

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar
					open={open}
					setOpen={setOpen}
					colorMode={colorMode}
					theme={theme}
				/>
				<Drawer
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: drawerWidth,
							boxSizing: 'border-box',
							backgroundColor:
								theme.palette.mode === 'dark' ? '#272727' : '#111827', // Cambia el color de fondo del sidebar según el tema
							color: 'white',
						},
					}}
					variant="persistent"
					anchor="left"
					open={open}
				>
					<DrawerHeader
						sx={{
							backgroundColor:
								theme.palette.mode === 'dark' ? '#272727' : '#111827',
							color: 'white',
						}}
					>
						<IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
							{theme.direction === 'ltr' ? (
								<ChevronLeftIcon />
							) : (
								<ChevronRightIcon />
							)}
						</IconButton>
					</DrawerHeader>
					<Divider />
					<MenuSidebar />
				</Drawer>
				<Main open={open}>
					<DrawerHeader />
					<Container maxWidth="xl">
						<Outlet />
					</Container>
				</Main>
			</Box>
		</ThemeProvider>
	);
};
