import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'logo' })(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
  },
  root: {
    display: 'flex',
    margin: theme.spacing(5, 0, 0),
    justifyContent: 'center',
    position: 'relative',
    overflow: 'auto',
    zIndex: 23,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
    '& img': {
      height: 64,
      margin: theme.spacing(4),
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      opacity: theme.palette.mode === 'dark' ? 0.5 : 1,
      transition: 'all 0.3s ease-out',
      '&:hover': {
        filter: 'none'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
