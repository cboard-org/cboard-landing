import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import useStyles from './logo-style';
import './animation.css';

const logos = [
  '/images/logos/microsoft.png',
  '/images/logos/unicef.png',
  '/images/logos/ceibal.png',
  '/images/logos/2ghether.png',
  '/images/logos/learning-cabinet.svg',
];

function CompanyLogo() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  // Create multiple duplicates for smoother infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <Container fixed>
      <Typography
        align="center"
        variant="h4"
        className={classes.title}
      >
        {t('company_title')}
      </Typography>
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUpShort"
        offset={-200}
        delay={300}
        duration={0.5}
      >
        <div className={classes.root}>
          <div className={classes.carousel}>
            <div className={classes.logoTrack}>
              {duplicatedLogos.map((logo, index) => {
                const logoName = logo.split('/').pop().split('.')[0];
                const setNumber = Math.floor(index / logos.length);
                return (
                  <div key={`${logoName}-set-${setNumber}`} className={classes.logoItem}>
                    <img
                      src={logo}
                      alt={`cboard partner logo ${(index % logos.length) + 1}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
}

export default CompanyLogo;
