import { useState } from 'react';
import { createTheme, PaletteMode } from '@mui/material/styles';
import * as React from 'react';

export const UseThemeApp = () => {
	const [mode, setMode] = useState<PaletteMode>('light');

	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[],
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					...(mode === 'light'
						? {
								// paleta para el tema claro
								primary: {
									main: '#3f51b5',
								},
								secondary: {
									main: '#f50057',
								},
							}
						: {
								// paleta para el tema oscuro
								primary: {
									main: '#90caf9',
								},
								secondary: {
									main: '#f48fb1',
								},
								background: {
									default: '#121212',
									paper: '#1e1e1e',
								},
							}),
				},
			}),
		[mode],
	);

	return {
		theme,
		colorMode,
		mode,
	};
};
