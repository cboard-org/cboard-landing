import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';

const useStyles = makeStyles({ uniqId: 'partners' })((theme) => ({
  root: {
    background:
      theme.palette.mode === 'dark'
        ? darken(theme.palette.primary.light, 0.6)
        : lighten(theme.palette.primary.light, 0.8),
    minHeight: 400,
    paddingTop: theme.spacing(20),
    marginBottom: theme.spacing(47),
  },
  contentText: {
    textAlign: 'center',
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  grid: {
    marginTop: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: theme.shadows[10],
    },
  },
  media: {
    height: 180,
    objectFit: 'contain',
    padding: theme.spacing(3),
    backgroundColor: '#fff',
    [theme.breakpoints.down('sm')]: {
      height: 140,
      padding: theme.spacing(2),
    },
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
  },
  partnerName: {
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
}));

export default useStyles;
