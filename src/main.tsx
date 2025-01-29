import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ModulesContainer } from './pages';
import { PrivateLayout } from './components';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<PrivateLayout />}>
					<Route path="/" element={<></>} />
					<Route path="modules" element={<ModulesContainer />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
