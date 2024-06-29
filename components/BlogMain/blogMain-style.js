import { makeStyles } from 'tss-react/mui';

const blogMainStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
    root: {},
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
  }));

  export default blogMainStyles;