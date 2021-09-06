import { Drawer } from '@material-ui/core';
import React from 'react'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon'

export const Menu = ({ isOpen, setIsOpen }) => {
    const listMenu = [
        { route: '/', menu: 'Home', icon: 'home' },
        { route: '/favorites', menu: 'Favorites', icon: 'favorite' },
    ];
    return (
        <Drawer anchor="left" open={isOpen} onClose={() => { setIsOpen(false) } }>
            <div
                role="presentation"
            >
                <List>
                    {listMenu.map((menu, index) => (
                        <ListItem button key={menu.menu}>
                            <ListItemIcon>
                                <Icon>{menu.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText primary={menu.menu} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </div>
        </Drawer>
    )
}
