import { makeStyles } from 'tss-react/mui';
import { alpha, darken } from '@mui/material/styles';
import decoLightTop from 'public/images/mobile/deco-light-top.svg';
import decoDarkTop from 'public/images/mobile/deco-dark-top.svg';
import { color } from 'framer-motion';

const decoStyle = {
  width: 450,
  height: 450,
  position: 'absolute',
  top: 80,
  right: 40,
};

const bodytextStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
  root: {},
  decoPrimary: {
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    [theme.breakpoints.down('md')]: {
      top: 0,
    },
    ...decoStyle
  },
  decoSecondary: {
    fill: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    [theme.breakpoints.down('md')]: {
      top: 0,
    },
    ...decoStyle
  },
  text: {
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(14),
      paddingBottom: theme.spacing(44),
      margin: theme.spacing(4)
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(43),
      margin: theme.spacing(1),
      width: "100%"
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default bodytextStyles;
