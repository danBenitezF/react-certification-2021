import React from 'react';
import {Drawer, List, Divider} from '@material-ui/core';
import { listMenu } from './menuConfig';
import { MenuItem } from './MenuItem/MenuItem.component';

export const Menu = ({ isOpen, setIsOpen }) => {
    return (
        <Drawer anchor="left" open={isOpen} onClose={() => { setIsOpen(false) } }>
            <List>
                {listMenu.map((menu, index) => (
                    <MenuItem key={index} menu={ menu }/>
                ))}
            </List>
            <Divider />
        </Drawer>
    )
}
