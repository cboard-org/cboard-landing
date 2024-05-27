import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter' })((theme, _params, classes) => ({
  counterWrap: {
    margin: theme.spacing(10, 0),
    [theme.breakpoints.down('lg')]: {
      margin: 0
    }
  },
  text: {},
  counterItem: {
    '& p': {
      color: theme.palette.text.secondary,
      textTransform: 'capitalize',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'center',
      },
      '& i': {
        color: theme.palette.text.secondary,
        fontSize: 36,
        marginRight: theme.spacing(2),
        lineHeight: '42px',
        [theme.breakpoints.down('sm')]: {
          fontSize: 28,
          lineHeight: '28px'
        }
      }
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    alignItems: 'center',
    justifyContent: 'center',
    [`& .${classes.text}`]: {
      textAlign: 'center',
      '& h3': {
        position: 'relative',
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
        paddingBottom: theme.spacing(2)
      }
    }
  },
  counterInner: {
    '& > div': {
      position: 'relative',
      '&:after': {
        content: '""',
        height: 60,
        position: 'absolute',
        right: 0,
        top: 30,
        [theme.breakpoints.up('sm')]: {
          borderLeft: `2px solid ${theme.palette.primary.light}`
        }
      }
    },
    '& > div:last-child': {
      '&:after': {
        display: 'none'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
