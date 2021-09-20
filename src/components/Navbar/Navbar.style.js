import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        textDecoration: 'none',
        color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.black,
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    }
}));
