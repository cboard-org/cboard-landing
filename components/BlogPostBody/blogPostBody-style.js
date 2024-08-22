import { makeStyles } from 'tss-react/mui';

const blogPostBodyStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
    root: {},
    markdown: {
        img: {
            width: "100%",
            height: "auto"
        },
    },
}));

export default blogPostBodyStyles;