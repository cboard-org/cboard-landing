import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles({ uniqId: 'partnership' })((theme) => ({
  root: {
    background: theme.palette.background.paper,
    minHeight: 1500,
    paddingTop: theme.spacing(20),
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(45),
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: theme.spacing(50),
    },
    [theme.breakpoints.down('lg')]: {
      paddingBottom: theme.spacing(60),
    },
    [theme.breakpoints.down('xl')]: {
      paddingBottom: theme.spacing(60),
    },
  },
  container: {
    maxWidth: 1140,
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  header: {
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(6),
    },
  },
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: 1.2,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  subtitle: {
    fontSize: '1.5rem',
    textAlign: 'center',
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    fontWeight: 300,
    maxWidth: 600,
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25rem',
    },
  },
  content: {
    maxWidth: 800,
    margin: '0 auto',
  },
  section: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  sectionTitle: {
    fontSize: '1.75rem',
    fontWeight: 600,
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.primary.light
        : theme.palette.primary.dark,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
      marginBottom: theme.spacing(2),
    },
  },
  paragraph: {
    fontSize: '1.125rem',
    lineHeight: 1.7,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
    textAlign: 'justify',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      marginBottom: theme.spacing(2),
    },
  },
  highlight: {
    background:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.primary.main, 0.9)
        : alpha(theme.palette.primary.main, 0.1),
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    marginBottom: theme.spacing(4),
  },
  highlightText: {
    fontSize: '1.125rem',
    fontStyle: 'italic',
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.primary.white
        : theme.palette.primary.dark,
    margin: 0,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(4),
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down('md')]: {
      gap: theme.spacing(3),
      margin: theme.spacing(2, 0),
    },
  },
  logo: {
    maxHeight: 60,
    width: 'auto',
    [theme.breakpoints.down('md')]: {
      maxHeight: 40,
    },
    // Apply white filter for dark mode
    ...(theme.palette.mode === 'dark' && {
      filter: 'brightness(0) invert(1)',
    }),
    // Handle SVG fills
    '& svg': {
      fill: theme.palette.mode === 'dark' ? 'white' : 'currentColor',
    },
  },
  logoPlaceholder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 200,
    background: theme.palette.mode === 'dark'
      ? theme.palette.primary.main
      : '#2563eb',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      height: 60,
      width: 150,
      fontSize: '1.25rem',
    },
  },
  plusSymbol: {
    fontSize: '3rem',
    color: theme.palette.mode === 'dark'
      ? theme.palette.primary.light
      : theme.palette.primary.main,
    fontWeight: 300,
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  benefitsList: {
    '& ul': {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    '& li': {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(2),
      paddingLeft: theme.spacing(4),
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
        paddingLeft: theme.spacing(3),
      },
      '&:before': {
        content: '"✓"',
        position: 'absolute',
        left: 0,
        top: 2,
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        fontSize: '1.25rem',
      },
    },
  },
  cta: {
    textAlign: 'center',
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 4),
    background: alpha(theme.palette.primary.main, 0.05),
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(6),
      padding: theme.spacing(4, 2),
    },
  },
  ctaTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25rem',
    },
  },
  ctaText: {
    fontSize: '1.125rem',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  },
  ctaButton: {
    padding: theme.spacing(1.5, 4),
    fontSize: '1.125rem',
    fontWeight: 600,
    textTransform: 'none',
    borderRadius: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1.25, 3),
      fontSize: '1rem',
    },
  },
}));

export default useStyles;
