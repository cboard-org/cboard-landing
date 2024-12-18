import { makeStyles } from 'tss-react/mui';

const cardsStyles = makeStyles({ uniqId: 'cards' })((theme, _params, classes) => ({
  landscape: {
    marginBottom: theme.spacing(5),
    alignItems: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    '& figure': {
      width: 150,
      height: 150,
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        width: '93%',
        margin: '0 auto',
        height: 180
      },
      '& img': {
        height: '100%',
        [theme.breakpoints.down('sm')]: {
          height: 'auto',
          width: '100%'
        }
      }
    },
    [`& .${classes.desc}`]: {
      height: 185,
      padding: theme.spacing(3, 1),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
        marginLeft: theme.spacing(-12),
        paddingLeft: theme.spacing(13),
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: 230,
        marginTop: -200,
        padding: theme.spacing(3, 1),
      }
    }
  },
  potrait: {
    flexDirection: 'column',
    '& figure': {
      height: 250,
      width: '93%',
      margin: '0 auto',
      [theme.breakpoints.down('sm')]: {
        height: 180
      },
      '& img': {
        width: '100%'
      }
    },
    [`& .${classes.desc}`]: {
      marginTop: -200,
      padding: theme.spacing(3),
      paddingTop: 230,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(),
        paddingRight: theme.spacing(),
      }
    }
  },
  news: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(8)
    },
    '& figure': {
      overflow: 'hidden',
      borderRadius: 15,
      boxShadow: theme.shadows[8],
      zIndex: 1,
      '& img': {
        marginLeft: '50%',
        transform: 'translateX(-50%)'
      }
    },
    '& p': {
      fontSize: 18,
      marginTop: theme.spacing(2),
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  desc: {
    flex: 1,
  },
  text: {
    padding: theme.spacing(0, 1.5),
  },
  type: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
  },
  btn: {
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    textTransform: 'none'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default cardsStyles;
