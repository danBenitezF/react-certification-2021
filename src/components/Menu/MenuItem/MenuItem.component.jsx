import React from 'react'
import {Icon,  ListItem, ListItemIcon, ListItemText} from '@material-ui/core';

export const MenuItem = ( { menu }) => {
    const { name, icon, route} = menu;
    return (
<<<<<<< Updated upstream
        <ListItem button key={menu.menu}>
            <ListItemIcon>
                <Icon>{menu.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={menu.menu} />
        </ListItem>
        <Link to={`${route}`}>
            <ListItem button key={name}>
                <ListItemIcon>
                    <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={name} />
            </ListItem>
        </Link>
    )
}
