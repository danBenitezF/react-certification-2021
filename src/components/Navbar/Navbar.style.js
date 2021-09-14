import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    parent: {
        flexGrow: 1,
        marginTop: 0,
        height: 64
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        textDecoration: 'none',
        color: 'white',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    }
}));
