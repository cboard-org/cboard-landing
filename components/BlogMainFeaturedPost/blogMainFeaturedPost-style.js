import { makeStyles } from 'tss-react/mui';

const blogMainFeaturedPostStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
    root: {},
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.common.white,
        fontWeight: theme.typography.fontWeightMedium,
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

export default blogMainFeaturedPostStyles;