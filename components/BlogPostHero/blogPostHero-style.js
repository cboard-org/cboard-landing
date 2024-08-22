import { makeStyles } from 'tss-react/mui';

const blogPostHeroStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
    root: {},
    paper: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        [theme.breakpoints.up('lg')]: {
            minHeight: '26rem',
        },
        [theme.breakpoints.down('lg')]: {
            minHeight: '24rem',
        },
        [theme.breakpoints.down('md')]: {
            minHeight: '22rem',
        },
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    content: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default blogPostHeroStyles;