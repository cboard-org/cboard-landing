import { makeStyles } from 'tss-react/mui';

const decoStyle = {
  width: 450,
  height: 450,
  position: 'absolute',
  top: 80,
  right: 40,
};

const bodytextStyles = makeStyles({ uniqId: 'feature' })((theme) => ({
  root: {},
  containerWrap: {
    position: 'relative',
    lineHeight: '150%',
    display: 'block',
    [theme.breakpoints.down('md')]: {
      lineHeight: '140%',
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: '135%',
    },
  },
  decoPrimary: {
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    [theme.breakpoints.down('md')]: {
      top: 0,
    },
    ...decoStyle
  },
  decoSecondary: {
    fill: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    [theme.breakpoints.down('md')]: {
      top: 0,
    },
    ...decoStyle
  },
  text: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    '& img': {
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    },
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      wordBreak: 'break-word',
      lineHeight: '1.3',
      marginBottom: theme.spacing(2),
    },
    '& p': {
      marginBottom: theme.spacing(2),
      lineHeight: '1.6',
    },
    '& ul, & ol': {
      paddingLeft: theme.spacing(3),
      marginBottom: theme.spacing(2),
      '& li': {
        marginBottom: theme.spacing(1),
        lineHeight: '1.5',
      },
    },
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    '& iframe': {
      maxWidth: '100%',
      width: '100%',
      height: 'auto',
      minHeight: '315px',
      aspectRatio: '16/9',
      border: 'none',
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows[4],
      margin: theme.spacing(2, 0),
      display: 'block',
      [theme.breakpoints.up('sm')]: {
        minHeight: '400px',
      },
      [theme.breakpoints.up('md')]: {
        minHeight: '450px',
      },
      [theme.breakpoints.up('lg')]: {
        minHeight: '500px',
      },
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 0,
      paddingBottom: theme.spacing(44),
      margin: '0 auto',
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      maxWidth: '800px',
      fontSize: '1.1rem',
      lineHeight: '1.7',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
      paddingBottom: theme.spacing(43),
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0.5),
      padding: theme.spacing(1),
      '& h1': {
        fontSize: '1.8rem',
      },
      '& h2': {
        fontSize: '1.5rem',
      },
      '& h3': {
        fontSize: '1.3rem',
      },
      '& ul, & ol': {
        paddingLeft: theme.spacing(2),
      },
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default bodytextStyles;
