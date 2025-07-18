import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import brand from 'public/text/brand';
import logo from 'public/images/cboard-logo.svg';
import useStyles from './footer-style';
import SelectLang from '../LangSwitch/Select';


function Copyright() {
  return (
    <Typography variant="body2" display="block" align="center" color="textSecondary">
      &copy;&nbsp;
      {brand.cboard.footerText}
    </Typography>
  );
}

function Footer(props) {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const { invert, toggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation('common');

  const footers = [
    {
      title: t('footer_company'),
      description: [t('title_team'), t('title_history'), t('title_contact'), t('title_locations')],
      link: ['/team', '/history', '/contact', '/locations'],
    },
    {
      title: t('footer_resources'),
      description: [t('title_help'), t('title_faq'), t('title_blog'), t('title_pricing')],
      link: ['/help', '#resource-name', '/blog', '/pricing'],
    },
    {
      title: t('footer_legal'),
      description: [t('title_privacy'), t('title_terms')],
      link: ['/privacy', '/terms-of-use'],
    },
  ];

  return (
    <Container
      maxWidth="lg"
      component="footer"
      className={cx(classes.footer, invert && classes.invert)}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
            <Typography variant="h6" color="textPrimary">
              {brand.cboard.projectName}
            </Typography>
          </div>
          <Copyright />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map(footer => (
              <Grid item xs={12} md={3} key={footer.title} className={cx(classes.siteMapItem, invert && classes.invert)}>
                {isDesktop && (
                  <div>
                    <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                      {footer.title}
                    </Typography>
                    <ul>
                      {footer.description.map((item, index) => (
                        <li key={item}>
                          <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {isMobile && (
                  <Accordion
                    square
                    className={invert ? classes.invert : ''}
                    classes={{
                      root: classes.accordionRoot,
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon className={classes.accordionIcon} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      classes={{
                        content: classes.accordionContent,
                      }}
                    >
                      <strong>
                        {footer.title}
                      </strong>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        {footer.description.map((item, index) => (
                          <li key={item}>
                            <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.socmed}>
            <IconButton
              component={Link} href="https://www.facebook.com/cboardAAC"
              aria-label="facebook"
              className={classes.margin}
              size="small">
              <i className="ion-logo-facebook" />
            </IconButton>
            <IconButton
              component={Link} href="https://www.instagram.com/cboardapp/"
              aria-label="instagram"
              className={classes.margin}
              size="small">
              <i className="ion-logo-instagram" />
            </IconButton>
            <IconButton
              component={Link} href="https://www.linkedin.com/company/cboard/"
              aria-label="linkedin"
              className={classes.margin}
              size="small">
              <i className="ion-logo-linkedin" />
            </IconButton>
            <IconButton
              component={Link} href="https://www.youtube.com/channel/UCIdXJsQko7DVK-yApMQyV_Q"
              aria-label="youtube"
              className={classes.margin}
              size="small">
              <i className="ion-logo-youtube" />
            </IconButton>
            <IconButton
              component={Link} href="https://x.com/cboard_io"
              aria-label="x"
              className={classes.margin}
              size="small">
              <i className="ion-logo-twitter" />
            </IconButton>
          </div>
          <SelectLang toggleDir={toggleDir} />
        </Grid>
      </Grid>
    </Container >
  );
}

Footer.propTypes = {
  invert: PropTypes.bool,
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  invert: false,
  toggleDir: () => { },
};

export default Footer;
