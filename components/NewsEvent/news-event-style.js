import { makeStyles } from 'tss-react/mui';
import { alpha, darken } from '@mui/material/styles';
import decoLightTop from 'public/images/mobile/deco-light-top.svg';
import decoDarkBottom from 'public/images/mobile/deco-dark-top.svg';

const newsEventStyle = makeStyles({ uniqId: 'news' })(theme => ({
  root: {
    position: 'relative',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 40%, ${theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.65) : alpha(theme.palette.primary.light, 0.2)} 40%)`,
    margin: '0 auto',
    paddingBottom: theme.spacing(30),
    marginBottom: theme.spacing(-40)
  },
  decoBgTop: {
    background: `url(${theme.palette.mode === 'dark' ? decoDarkBottom : decoLightTop}) no-repeat transparent`,
    backgroundSize: '100% auto',
    transform: 'scale(1, 0.4)',
    position: 'absolute',
    width: '100%',
    height: 600,
    left: 0,
    top: 220,
    [theme.breakpoints.down('md')]: {
      top: 400
    }
  },
  parallaxEvent: {
    position: 'absolute',
    top: -320,
    left: 0,
    width: '100%',
  },
  blogWrap: {
    position: 'relative',
    zIndex: 10,
    margin: theme.spacing(10, 0)
  },
  listNews: {
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        paddingTop: '0 !important',
        paddingBottom: '0 !important'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default newsEventStyle;
