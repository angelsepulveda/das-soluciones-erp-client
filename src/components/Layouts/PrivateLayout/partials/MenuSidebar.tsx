import { useState } from 'react';
import { MenuItem, menuItems } from '../../../../utils';
import {
	Collapse,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import List from '@mui/material/List';

export const MenuSidebar = () => {
	const [openLevels, setOpenLevels] = useState<Record<string, boolean>>({});

	const handleClick = (text: string) => {
		setOpenLevels(prev => ({ ...prev, [text]: !prev[text] }));
	};

	const renderMenu = (items: MenuItem[]) => {
		return items.map(item => (
			<div key={item.text}>
				<ListItemButton onClick={() => handleClick(item.text)}>
					<ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
					<ListItemText primary={item.text} />
					{item.children &&
						(openLevels[item.text] ? <ExpandLess /> : <ExpandMore />)}
				</ListItemButton>
				{item.children && (
					<Collapse in={openLevels[item.text]} timeout="auto" unmountOnExit>
						<List component="div" disablePadding sx={{ marginLeft: '10px' }}>
							{renderMenu(item.children)}
						</List>
					</Collapse>
				)}
			</div>
		));
	};

	return <List>{renderMenu(menuItems)}</List>;
};
