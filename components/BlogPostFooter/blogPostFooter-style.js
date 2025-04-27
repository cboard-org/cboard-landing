import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';

const blogPostFooterStyles = makeStyles({ uniqId: 'footer' })((theme, _params, classes) => ({
  footer: {
    padding: theme.spacing(1),
    marginTop: 0,    
    backgroundColor: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.65) : lighten(theme.palette.primary.light, 0.8),
    textTransform: 'capitalize',
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  label: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightLight,
    textTransform: 'capitalize',
  },
}));

export default blogPostFooterStyles;