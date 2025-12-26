import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles({ uniqId: 'cbuilder-popup' })((theme) => ({
  dialog: {
    zIndex: theme.zIndex.modal + 1,
  },
  dialogPaper: {
    borderRadius: theme.spacing(2),
    maxWidth: 500,
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),
      borderRadius: theme.spacing(1),
    },
  },
  dialogTitle: {
    padding: theme.spacing(3, 3, 1, 3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 2, 1, 2),
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontWeight: 600,
    lineHeight: 1.3,
    color: theme.palette.primary.main,
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
    },
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: 400,
    lineHeight: 1.3,
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  closeButton: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(-1),
    marginRight: theme.spacing(-1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
    },
  },
  dialogContent: {
    padding: theme.spacing(1, 3, 2, 3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2, 2, 2),
    },
  },
  description: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      marginBottom: theme.spacing(2),
    },
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      gap: theme.spacing(1.5),
    },
  },
  logo: {
    maxHeight: 70,
    width: 'auto',
    ...(theme.palette.mode === 'dark' && {
      filter: 'brightness(0) invert(1)',
    }),
    [theme.breakpoints.down('sm')]: {
      maxHeight: 55,
    },
  },
  dialogActions: {
    padding: theme.spacing(1, 3, 3, 3),
    gap: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2, 2, 2),
      flexDirection: 'column',
      '& > button': {
        width: '100%',
      },
    },
  },
  dismissButton: {
    color: theme.palette.text.secondary,
    '&:hover': {
      backgroundColor: alpha(theme.palette.text.secondary, 0.1),
    },
  },
  applyButton: {
    fontWeight: 600,
    textTransform: 'none',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(1, 3),
    boxShadow: theme.shadows[2],
    '&:hover': {
      boxShadow: theme.shadows[4],
    },
  },
}));

export default useStyles;
