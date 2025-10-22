/* eslint-disable no-unused-vars */
import { makeStyles } from 'tss-react/mui';

const blogPostBodyStyles = makeStyles({ uniqId: 'feature' })(
  (theme, _params, classes) => ({
    root: {},
    markdown: {
      p: {
        '& img': {
          width: '80%',
          height: 'auto',
          margin: '20px 0',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        '& em': {
          fontStyle: 'italic',
          color: theme.palette.text.secondary,
          textAlign: 'center',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
  })
);

export default blogPostBodyStyles;
