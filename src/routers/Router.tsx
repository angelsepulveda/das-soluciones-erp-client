import { createBrowserRouter } from 'react-router';
import App from '../App.tsx';
import Layout from '../Layout.tsx';

export const router = createBrowserRouter([
	{
		Component: App, // root layout route
		children: [
			{
				path: '/',
				Component: Layout,
			},
		],
	},
]);
