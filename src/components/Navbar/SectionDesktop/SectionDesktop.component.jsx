import React, { useContext } from 'react'
import { useStyles } from './SectionDesktop.style';
import { VideosContext } from '../../../providers/Videos/Videos.provider';
import { actions } from '../../../types/actions';

import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

export const SectionDesktop = () => {
    const classes = useStyles();
    const { globalState, dispatch } = useContext(VideosContext);
    const theme = globalState.theme === 'light' ? 'dark' : 'light';
    const handleTheme = () => {
        dispatch({type: actions.THEME, payload: theme})
    };
    return (
        <div className={classes.sectionDesktop}> 
            <IconButton
                aria-label="show more"
                aria-controls="primary-search-account-menu-mobile"
                aria-haspopup="true"
                color="inherit"
                onClick={ handleTheme }
            >
                {
                    theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />
                }
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
