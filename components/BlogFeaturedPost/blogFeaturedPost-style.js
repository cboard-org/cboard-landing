import { makeStyles } from 'tss-react/mui';

const blogFeaturedPostStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
    root: {},
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
}));

export default blogFeaturedPostStyles;