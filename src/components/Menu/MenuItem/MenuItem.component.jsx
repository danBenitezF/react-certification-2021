import React from 'react'
import {Icon,  Link,  ListItem, ListItemIcon, ListItemText} from '@material-ui/core';

export const MenuItem = ( { menu }) => {
    const { icon, route} = menu;
    return (
        <Link to={`${route}`}>
            <ListItem button key={menu}>
                <ListItemIcon>
                    <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={menu} />
            </ListItem>
        </Link>
    )
}
