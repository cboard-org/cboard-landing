import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';

const showcaseStyles = makeStyles({ uniqId: 'showcase' })((theme, _params, classes) => ({
  root: {
    backgroundImage: `linear-gradient(185deg, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main} 50%, ${theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} 100%)`,
    paddingTop: theme.spacing(80),
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(70),
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing(50),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(60, 3, 0),
    },
    [theme.breakpoints.down(330)]: {
      padding: theme.spacing(60, 0, 0),
    }
  },
  decoTop: {
    fill: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.65) : lighten(theme.palette.primary.light, 0.8),
    height: 300,
    width: '100%',
    position: 'absolute',
    top: -3,
    left: 0,
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(1.5, 1)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    }
  },
  decoBottom: {
    fill: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.6) : lighten(theme.palette.primary.light, 0.8),
    height: 300,
    width: '100%',
    position: 'absolute',
    bottom: -70,
    zIndex: 21,
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(1.5, 1)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      width: 1280,
      left: '-50%'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  decoBottomMobile: {
    display: 'none',
    height: 140,
    width: '140%',
    left: '-20%',
    position: 'absolute',
    bottom: -40,
    borderRadius: '50%',
    zIndex: 21,
    background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.6) : lighten(theme.palette.primary.light, 0.8),
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  invertParallax: {
    filter: 'brightness(0) invert(1)',
    position: 'absolute',
    opacity: 0.5,
    left: 0,
    bottom: 600,
    width: '100%',
    height: '100%',
  },
  carouselWrap: {
    position: 'relative',
    zIndex: 20,
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(5),
    }
  },
  item: {
    position: 'relative',
    '&:focus': {
      outline: 'none'
    }
  },
  frame: {
    padding: theme.spacing(1),
    margin: '0 auto',
    borderRadius: 20,
    background: theme.palette.common.white,
    '& img': {
      display: 'block',
      width: '100%'
    }
  },
  carouselSide: {
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1440,
      margin: '0 auto'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [`& .${classes.frame}`]: {
      width: 200,
      height: 410,
      [theme.breakpoints.down('lg')]: {
        width: 166,
        height: 365,
      },
      '& img': {}
    }
  },
  carouselCenter: {
    width: 320,
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: 0,
    },
    [theme.breakpoints.up('lg')]: {
      bottom: -60,
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto'
    },
    [`& .${classes.frame}`]: {
      width: 249,
      height: 548,
      position: 'relative',
      [theme.breakpoints.only('sm')]: {
        width: 166,
        height: 365,
      },
      [theme.breakpoints.only('md')]: {
        width: 166,
        height: 365,
      },
      '& img': {
        transition: 'all 0.3s ease-out',
        transform: 'translateY(30px)'
      }
    },
    '& div[class="slick-list"]': {
      overflow: 'visible'
    },
    '& div[class*="slick-active "]': {
      '& img': {
        transform: 'translate(0)'
      },
      [`& .${classes.widget}`]: {
        transform: 'scale(1.2)',
        opacity: 1,
      }
    }
  },
  widget: {
    position: 'absolute',
    top: 30,
    left: 0,
    transform: 'scale(1)',
    opacity: 0,
    transition: 'all 0.4s ease-out',
    transitionDelay: '0.3s',
    zIndex: 2,
    '& img': {
      width: '100%',
    }
  },
  active: {},
  pagination: {
    zIndex: 80,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-8)
    },
    '& ul': {
      position: 'absolute',
      display: 'block',
      width: '100%',
      padding: 0,
      margin: 0,
      listStyle: 'none',
      textAlign: 'center',
      bottom: theme.spacing(-6),
      '& li': {
        position: 'relative',
        display: 'inline-block',
        width: 15,
        height: 15,
        margin: '0 5px',
        padding: 0,
        background: theme.palette.secondary.main,
        borderRadius: 15,
        transition: 'all 0.5s ease-out',
        [`&.${classes.active}`]: {
          width: 40,
        },
        '&:hover': {
          opacity: 0.5
        },
        '& button': {
          opacity: 0,
          cursor: 'pointer',
          padding: 0,
          width: '100%',
          height: '100%'
        }
      },
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default showcaseStyles;
