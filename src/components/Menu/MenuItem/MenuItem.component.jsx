import React from 'react'
import {Icon,  ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { Link } from 'react-router-dom';

export const MenuItem = ( { menu }) => {
    return (
        <Link to={`${menu.route}`}>
            <ListItem button key={menu.menu}>
                <ListItemIcon>
                    <Icon>{menu.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={menu.menu} />
            </ListItem>
        </Link>
    )
}
