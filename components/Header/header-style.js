import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import flag from 'public/images/flag-logo.png';

const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="pt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = makeStyles({ uniqId: 'header' })((theme, _params, classes) => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fixed: {},
  header: {
    position: 'fixed',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: 'none',
    transition: 'all 0.5s ease-out',
    zIndex: 90,
    '& > *': {
      [theme.breakpoints.down('lg')]: {
        padding: 0
      }
    },
    [`&.${classes.fixed}`]: {
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      [`& .${classes.logo}`]: {
        '& a': {
          color: 'transparent',
          fontSize: 0,
        },
        '& img': {
          marginBottom: 0,
          [theme.breakpoints.up('sm')]: {
            height: 48,
            width: 216
          }
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
        [`& .${classes.button}`]: {
          padding: theme.spacing(0.5, 2)
        }
      },
      [`& .${classes.socialBtn}`]: {
        background: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.light, 0.12) : alpha(theme.palette.primary.main, 0.12),
        '& i': {
          color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
        }
      },
      [`& .${classes.setting}`]: {
        '& svg': {
          fill: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
        }
      }
    },
    [`&.${classes.openDrawer}`]: {
      zIndex: 1600,
      boxShadow: 'none',
    },
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(2, 0),
      },
      display: 'flex'
    }
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 10,
      color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.main,
      alignItems: 'center',
      transition: 'color 0.5s ease-out',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      margin: '0 auto',
      transition: 'all 0.3s ease-out',
      marginBottom: theme.spacing(),
      height: 34,
      width: 216,
      [theme.breakpoints.up('sm')]: {
        width: 216,
        height: 40
      }
    }
  },
  active: {},
  button: {
    width: theme.spacing(20)
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1),
      },
    },
    '& a': {
      marginTop: theme.spacing(0.5),
      fontSize: 16,
      fontWeight: theme.typography.fontWeightMedium,
      boxShadow: 'none',
      position: 'relative',
      margin: theme.spacing(0, 1),
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: '6px',
          background: 'none !important',
          color: theme.palette.text.primary,
          '&:after': {
            content: '""',
            height: 6,
            width: 6,
            transform: 'scale(0)',
            position: 'absolute',
            borderRadius: '50%',
            margin: '0 auto',
            bottom: -5,
            background: theme.palette.primary.main,
            transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
          },
          '&:hover': {
            transition: 'all 0.3s ease-out',
            color: alpha(theme.palette.text.primary, 0.5),
            '&:after': {
              transform: 'scale(1)',
            }
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
            '&:after': {
              transform: 'scale(1)',
            },
          }
        }
      }
    },
    [`&.${classes.invert}`]: {
      [`& .${classes.socialBtn}`]: {
        background: alpha(theme.palette.primary.main, 0.24),
        '& i': {
          color: theme.palette.primary.main
        }
      },
    }
  },
  margin: {},
  langMenu: {
    textTransform: 'capitalize',
    '& i': {
      ...flagIcon
    }
  },
  socialBtn: {
    background: alpha(theme.palette.common.white, 0.24),
    width: 35,
    height: 35,
    padding: theme.spacing(0.5),
    margin: '0 6px',
    '& i': {
      color: theme.palette.common.white,
      fontSize: 22,
    }
  },
  icon: {},
  invert: {},
  setting: {
    margin: theme.spacing(0, 1),
    [`& .${classes.icon}`]: {
      transition: 'all 0.3s ease',
      color: theme.palette.common.white,
      [`&.${classes.invert}`]: {
        '& svg': {
          fill: theme.palette.text.secondary
        }
      }
    },
    '& svg': {
      fill: theme.palette.common.white,
      width: 30,
      height: 30,
      [theme.breakpoints.down('sm')]: {
        fill: theme.palette.text.secondary
      },
    },
    [`& .${classes.active}`]: {
      transform: 'rotate(30deg)'
    }
  },
  modeMenu: {
    textTransform: 'capitalize'
  },
  bar: {
    '&[class*="hamburger-inner"]': {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary
      }
    }
  },
  menu: {},
  openDrawer: {},
  paperNav: {
    width: '100%',
    background: theme.palette.background.paper,
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
  },
  mobileNav: {
    background: theme.palette.background.paper,
    height: '100%',
    [`& .${classes.menu}`]: {
      padding: theme.spacing(0, 5),
      overflow: 'auto',
      top: 90,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 90px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      },
    }
  },
  menuList: {
    textTransform: 'capitalize',
    '& span': {
      fontSize: 24
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default headerStyles;
