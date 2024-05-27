import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';
import decoLightBottom from 'public/images/mobile/deco-light-top.svg';
import decoDarkBottom from 'public/images/mobile/deco-dark-top.svg';

const testiStyles = makeStyles({ uniqId: 'testi' })((theme, _params, classes) => ({
  root: {
    background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.6) : lighten(theme.palette.primary.light, 0.8),
    minHeight: 400,
    paddingTop: theme.spacing(20)
  },
  carouselWrap: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center'
  },
  item: {
    '&:focus': {
      outline: 'none'
    }
  },
  content: {
    fontStyle: 'italic',
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  name: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    margin: theme.spacing(2, 0, 4),
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  carouselText: {
    [`& .${classes.item}`]: {
      position: 'relative'
    }
  },
  carouselAvatar: {
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: 768,
    },
    [`& .${classes.item}`]: {
      cursor: 'pointer',
      height: 140,
      paddingTop: theme.spacing(2)
    },
    '& div[class*="slick-center"]': {
      [`& .${classes.avatar}`]: {
        opacity: 1,
        transform: 'scale(1.4)'
      }
    }
  },
  avatar: {
    border: '4px solid white',
    width: 80,
    height: 80,
    margin: '0 auto',
    opacity: 0.7,
    transition: 'all 0.3s ease'
  },
  decoBgBottom: {
    background: `url(${theme.palette.mode === 'dark' ? decoDarkBottom : decoLightBottom}) no-repeat transparent`,
    backgroundSize: '100% auto',
    transform: 'rotate(180deg) scale(1, 0.4)',
    position: 'absolute',
    width: '100%',
    height: 470,
    left: 0,
    bottom: -145,
    '&:after': {
      content: '""',
      background: `url(${theme.palette.mode === 'dark' ? decoDarkBottom : decoLightBottom}) no-repeat transparent`,
      backgroundSize: '100% auto',
      position: 'absolute',
      width: '100%',
      height: 470,
      opacity: 0.5,
      left: 60,
      top: 60,
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
