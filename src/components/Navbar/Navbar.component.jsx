import React from 'react'

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Menu } from '../Menu/Menu.component';
import { useState } from 'react';
import { useStyles } from './Navbar.style';
import { NavbarSearch } from './NavbarSearch/NavbarSearch.component';
import { SectionDesktop } from './SectionDesktop/SectionDesktop.component';
import { SectionMobile } from './SectionMobile/SectionMobile.component';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { menuButton, grow, title } = useStyles();

    return (
        <div className={grow}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                     edge="start" 
                     className={menuButton} 
                     color="inherit" 
                     aria-label="menu"
                     onClick={ () => setIsOpen(!isOpen) }
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={title}>
                    YoutubePerron
                </Typography>
                <div className={grow} />
                <NavbarSearch/>
                <div className={grow} />
                <SectionDesktop/>
                <SectionMobile/>
            </Toolbar>
        </AppBar>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={ parent }>
            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton
                        edge="start" 
                        className={menuButton} 
                        color="inherit" 
                        aria-label="menu"
                        onClick={ () => setIsOpen(!isOpen) }
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Link to={`/`}>
                        <Typography variant="h6" className={title} color="primary">
                            YoutubePerron
                        </Typography>
                    </Link>
                    <div className={grow} />
                    <NavbarSearch/>
                    <div className={grow} />
                    <SectionDesktop/>
                    <SectionMobile/>
                </Toolbar>
            </AppBar>
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    )
};
export default Navbar;
