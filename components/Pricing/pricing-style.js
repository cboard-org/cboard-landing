import { makeStyles } from 'tss-react/mui';
import decoLightBottom from 'public/images/mobile/deco-light-top.svg';
import decoDarkBottom from 'public/images/mobile/deco-dark-top.svg';

const pricingStyles = makeStyles({ uniqId: 'te22sti' })((theme, _params, classes) => ({
  root: {
    background: theme.palette.background.paper,
    minHeight: 1500,
    paddingTop: theme.spacing(20),
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(23)
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: theme.spacing(40)
    }
  },
  titles: {
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  subtitle: {
    fontSize: '0.8rem',
    fontColor: 'red'
  },
  subprice: {
    textDecoration: 'line-through',
    fontSize: '1rem',
    paddingBottom: 10,
    paddingLeft: 40,
    color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[600]
  },
  icon: {
    color: 'green',
  },
  iconRed: {
    color: 'red',
  },
  pricingWrap: {
    marginBottom: 0,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(10),
      marginBottom: theme.spacing(10)
    }
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
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.grey,
    margin: theme.spacing(2, 0, 4),
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    },
    fontSize: 22,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18
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
      marginBottom: theme.spacing(9),
      paddingTop: theme.spacing(8),
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
    width: 120,
    height: 120,
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
export default pricingStyles;
