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
    margin: theme.spacing(5, 0, 0),
    position: 'relative',
    zIndex: 23,
  },
  carousel: {
    overflow: 'hidden',
    width: '100%',
    '&:hover $logoTrack': {
      animationPlayState: 'paused',
    },
  },
  logoTrack: {
    display: 'flex',
    width: '300%', // Width for 3 sets of logos
    animation: 'logoScroll 25s linear infinite',
    '&:hover': {
      animationPlayState: 'paused',
    },
  },
  logoItem: {
    flex: '0 0 auto',
    minWidth: '200px', // Ensure consistent width for each logo
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      height: 44,
      maxWidth: '160px',
      objectFit: 'contain',
      margin: theme.spacing(2),
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      opacity: theme.palette.mode === 'dark' ? 0.5 : 1,
      transition: 'all 0.3s ease-out',
      '&:hover': {
        filter: 'none'
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
