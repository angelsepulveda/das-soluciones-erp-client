import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Outlet } from 'react-router';
import { themeMaterial } from './themes';
import { NavigationItems } from './routers';

export default function App(props: any) {
	const { window } = props;
	const demoWindow = window ? window() : undefined;

	return (
		<ReactRouterAppProvider
			navigation={NavigationItems}
			theme={themeMaterial}
			window={demoWindow}
			branding={{
				title: 'Das Soluciones',
			}}
		>
			<Outlet />
		</ReactRouterAppProvider>
	);
}
