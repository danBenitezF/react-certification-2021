import React from 'react'
import { useStyles } from './SectionDesktop.style';

import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export const SectionDesktop = () => {
    const classes = useStyles();
    return (
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
    )
}
