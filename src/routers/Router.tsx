import { createBrowserRouter } from 'react-router';
import App from '../App.tsx';
import { PrivateLayout } from '../layouts';
import { ModulesContainer } from '../pages';

export const router = createBrowserRouter([
	{
		Component: App,
		children: [
			{
				element: <PrivateLayout />,
				children: [
					{
						path: '/',
						element: <ModulesContainer />,
					},
					{
						path: '/memberships/modules',
						element: <ModulesContainer />,
					},
				],
			},
		],
	},
]);
