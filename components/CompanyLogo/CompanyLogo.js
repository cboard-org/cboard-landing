import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import useStyles from './logo-style';

const logos = [
  '/images/logos/microsoft.png',
  //'/images/logos/unicef.png',
  '/images/logos/ceibal.png',
  '/images/logos/2ghether.png',
];

function CompanyLogo() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

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
          {logos.map((logo, index) => (
            <img src={logo} alt={'logo' + index.toString()} key={index.toString()} />
          ))}
        </div>
      </ScrollAnimation>
    </Container>
  );
}

export default CompanyLogo;
