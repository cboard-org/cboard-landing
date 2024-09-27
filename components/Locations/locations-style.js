import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';

const locationsStyles = makeStyles({ uniqId: 'testi' })((theme, _params, classes) => ({
  root: {
    background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.6) : lighten(theme.palette.primary.light, 0.8),
    minHeight: 400,
    paddingTop: theme.spacing(20),
    marginBottom: theme.spacing(30),
  },
  contentText: {
    textAlign: 'center',
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  mainImg: {
    margin: theme.spacing(5),
    padding: theme.spacing(1),
    '& img': {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto'
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default locationsStyles;
