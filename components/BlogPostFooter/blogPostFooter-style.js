import { makeStyles } from 'tss-react/mui';

const blogPostFooterStyles = makeStyles({ uniqId: 'footer' })((theme, _params, classes) => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 0,
    backgroundColor: theme.palette.grey[200],
    textTransform: 'capitalize',
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  label: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'capitalize',
  },
}));

export default blogPostFooterStyles;