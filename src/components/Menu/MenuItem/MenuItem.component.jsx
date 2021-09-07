import React from 'react'
import {Icon,  ListItem, ListItemIcon, ListItemText} from '@material-ui/core';

export const MenuItem = ( { menu }) => {
    return (
        <ListItem button key={menu.menu}>
            <ListItemIcon>
                <Icon>{menu.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={menu.menu} />
        </ListItem>
    )
}
