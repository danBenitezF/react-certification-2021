import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    }
}));
