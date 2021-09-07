import React from 'react'
import { useStyles } from './SectionMobile.style';

import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
export const SectionMobile = () => {
    const classes = useStyles();
    return (
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
    )
}
