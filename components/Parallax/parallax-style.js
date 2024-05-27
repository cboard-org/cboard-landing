import { makeStyles } from 'tss-react/mui';

const parallaxStyles = makeStyles({ uniqId: 'parallax' })((theme, _params, classes) => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 1500,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& [class*="figure"]': {
      height: 500,
      width: '100%',
      display: 'block',
      position: 'absolute',
      '& svg': {
        position: 'absolute'
      }
    },
  },
  triangle: {
    stroke: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    opacity: 0.2,
    width: 60,
    height: 60,
  },
  circle: {
    stroke: theme.palette.secondary.main,
    width: 150,
    height: 150,
    opacity: 0.2
  },
  square: {
    fill: theme.palette.primary.light,
    width: 110,
    height: 110,
    opacity: 0.2,
  },
  dot: {
    fill: theme.palette.primary.light,
    width: 140,
    height: 140,
    top: -15,
    left: -10
  },
  dotMany: {
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    width: 510,
    height: 510,
    top: 0,
    left: 120,
    transform: 'rotate(30deg)',
    transformOrigin: 'left center',
    opacity: 0.4
  },
  dotManySmall: {
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    width: 510,
    height: 510,
    top: 0,
    left: -120,
    transform: 'rotate(30deg)',
    transformOrigin: 'left center',
    opacity: 0.4
  },
  squareDot: {
    position: 'absolute',
  },
  large: {
    [`& .${classes.triangle}`]: {
      left: 40,
      top: 40
    },
    [`& .${classes.circle}`]: {
      left: '70%',
      bottom: 0,
    },
    [`& .${classes.squareDot}`]: {
      left: 50,
      bottom: 0
    },
  },
  medium: {
    [`& .${classes.triangle}`]: {
      top: 0,
      left: -100,
    },
    [`& .${classes.circle}`]: {
      top: -100,
      right: -80,
      transform: 'scale(0.8)'
    },
    [`& .${classes.squareDot}`]: {
      left: 0,
      top: -50,
      [`& .${classes.dotMany}`]: {
        fill: theme.palette.primary.light
      }
    },
  },
  small: {
    [`& .${classes.triangle}`]: {
      top: -80,
      left: -10,
      transform: 'scale(0.8)'
    },
    [`& .${classes.circle}`]: {
      top: -100,
      left: '50%',
      transform: 'scale(0.8)'
    },
    [`& .${classes.squareDot}`]: {
      left: 0,
      top: -10
    },
  },
  extraSmall: {
    [`& .${classes.triangle}`]: {
      top: -80,
      left: 10,
      transform: 'scale(0.8)'
    },
    [`& .${classes.circle}`]: {
      top: 100,
      left: 220,
      transform: 'scale(0.8)'
    },
    [`& .${classes.squareDot}`]: {
      left: 30,
      top: -10,
      transform: 'scale(0.7)'
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default parallaxStyles;
