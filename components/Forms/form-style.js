import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import decoWaveLight from 'public/images/mobile/deco-wave-light.png';
import decoWaveDark from 'public/images/mobile/deco-wave-dark.png';
import decoLineLight from 'public/images/mobile/deco-line-light.png';
import decoLineDark from 'public/images/mobile/deco-line-dark.png';

const contactStyles = makeStyles({ uniqId: 'form' })((theme, _params, classes) => ({
  title: {},
  pageWrap: {
    position: 'relative',
    textAlign: 'center',
    height: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.dafault : theme.palette.background.paper,
    padding: theme.spacing(10, 5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(5, 1)
    },
    [`& .${classes.title}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('md')]: {
        fontSize: 32
      },
    },
    '& a': {
      color: theme.palette.primary.main,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  background: {
    zIndex: 0,
    position: 'absolute',
    height: 700,
    top: -30,
    right: -200,
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    width: '50%',
    '& img': {
      position: 'absolute',
      right: theme.direction === 'rtl' ? 'auto' : 200,
      left: theme.direction === 'rtl' ? 200 : 'auto',
      top: 0,
    }
  },
  decoInner: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.2,
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
  },
  gradient: {
    backgroundImage: `linear-gradient(30deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 140%)`,
    width: '100%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    '& img': {
      display: 'block'
    }
  },
  decoWave: {
    position: 'absolute',
    top: 0,
    left: -1,
    width: '102%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.mode === 'dark' ? decoWaveDark : decoWaveLight}) no-repeat 0 0`,
    backgroundSize: '100% 720px'
  },
  decoLine: {
    position: 'absolute',
    left: -12,
    top: -40,
    opacity: 0.56,
    width: '100%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.mode === 'dark' ? decoLineDark : decoLineLight}) no-repeat 0 0`,
    backgroundSize: '100% 700px',
  },
  parallax: {
    overflow: 'hidden',
    height: '100%',
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0
  },
  innerWrap: {
    position: 'relative',
    textAlign: 'left',
    zIndex: 1
  },
  fullFromWrap: {
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(9, 0)
    }
  },
  formBox: {
    zIndex: 1,
    borderRadius: 40,
    overflow: 'hidden',
    background: 'transparent',
    boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.28)',
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none'
    }
  },
  desc: {
    zIndex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: theme.spacing(0, 15),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 1),
      fontSize: 16,
    },
  },
  input: {
    width: '100%',
    '& label': {
      left: theme.spacing(0.5),
    },
    '& > div': {
      border: `1px solid ${alpha(theme.palette.text.primary, 0.25)}`,
      background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.09)' : 'none !important',
      overflow: 'hidden',
      '& input, textarea': {
        paddingLeft: theme.spacing(2),
        '&:focus': {
          background: alpha(theme.palette.background.paper, 0.9)
        },
        '&:hover': {
          background: alpha(theme.palette.background.paper, 0.13)
        }
      },
      '&:hover': {
        '& textarea': {
          background: 'none !important'
        }
      }
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    padding: theme.spacing(0, 15, 10),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 4, 10)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 1),
      marginTop: theme.spacing(2),
    },
  },
  formHelper: {
    display: 'flex',
    marginTop: theme.spacing(),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  btnArea: {
    marginTop: theme.spacing(5),
    justifyContent: 'space-between',
    '& label': {
      position: 'relative'
    },
    '& button': {
      minWidth: 240,
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('md')]: {
      '& button': {
        marginTop: theme.spacing(4),
        width: '100%',
        height: 56
      }
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    }
  },
  primary: {
    background: theme.palette.primary.main,
    position: 'absolute',
    opacity: 0.08,
    transform: 'rotate(45deg)',
  },
  secondary: {
    background: theme.palette.secondary.main,
    position: 'absolute',
    opacity: 0.1,
    transform: 'rotate(45deg)',
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    zIndex: 20,
    [theme.breakpoints.up('md')]: {
      marginTop: 20,
      marginLeft: 20,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 32,
      color: theme.palette.text.disabled
    },
    '& > span i:first-of-type': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-of-type': {
        opacity: 0,
      },
      '& > span i:last-child': {
        right: 30,
        opacity: 1,
      },
    }
  },
  check: {
    '& svg': {
      fill: theme.palette.secondary.main
    }
  },
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    [`&.${classes.logoHeader}`]: {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64
    },
    '& p, span': {
      display: 'block',
      fontSize: 24,
      paddingBottom: 4,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '& a': {
      marginTop: theme.spacing(2),
    }
  },
  formWrap: {
    background: theme.palette.background.paper,
    position: 'relative',
    padding: theme.spacing(6)
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default contactStyles;
