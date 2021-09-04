import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import { Menu } from '../Menu/Menu.component';
import { useState } from 'react';
import { useStyles } from './Navbar.style';
import { NavbarSearch } from './NavbarSearch/NavbarSearch.component';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();
    return (
        <div className={classes.grow}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                     edge="start" 
                     className={classes.menuButton} 
                     color="inherit" 
                     aria-label="menu"
                     onClick={ () => setIsOpen(!isOpen) }
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    YoutubePerron
                </Typography>
                <div className={classes.grow} />
                <NavbarSearch/>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}> 
                    <IconButton
                        aria-label="show more"
                        aria-controls="primary-search-account-menu-mobile"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <Brightness4Icon />
                    </IconButton>
                    <IconButton
                        aria-label="show more"
                        aria-controls="primary-search-account-menu-mobile"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </div>
                <div className={classes.sectionMobile}> 
                    <IconButton
                        aria-label="show more"
                        aria-controls="primary-search-account-menu-mobile"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    )
};
export default Navbar;
