import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Title from 'components/Title';
import useStyles from './partnership-style';

function Partnership() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={classes.header}
        >
          <div>
            <Title align="center">{t('partnership_title')}</Title>
          </div>
          <Typography className={classes.subtitle} component="h2">
            {t('partnership_subtitle')}
          </Typography>
        </motion.div>

        <div className={classes.logoContainer}>
          <img
            src="/images/cboard-logo.svg"
            alt="Cboard Logo"
            className={classes.logo}
          />
          <span className={classes.plusSymbol}>+</span>
          <img
            src="/images/logos/elevenlabs.png"
            alt="ElevenLabs Logo"
            className={classes.logo}
          />
        </div>

        <div className={classes.content}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={classes.section}
          >
            <div className={classes.highlight}>
              <Typography className={classes.highlightText}>
                &ldquo;
                {t('partnership_quote')}
                &rdquo;
              </Typography>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={classes.section}
          >
            <Typography className={classes.sectionTitle} component="h3">
              {t('partnership_about_title')}
            </Typography>
            <Typography className={classes.paragraph}>
              {t('partnership_about_desc1')}
            </Typography>
            <Typography className={classes.paragraph}>
              {t('partnership_about_desc2')}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={classes.section}
          >
            <Typography className={classes.sectionTitle} component="h3">
              {t('partnership_benefits_title')}
            </Typography>
            <div className={classes.benefitsList}>
              <ul>
                <li>{t('partnership_benefit1')}</li>
                <li>{t('partnership_benefit2')}</li>
                <li>{t('partnership_benefit3')}</li>
                <li>{t('partnership_benefit4')}</li>
                <li>{t('partnership_benefit5')}</li>
                <li>{t('partnership_benefit6')}</li>
                <li>{t('partnership_benefit7')}</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={classes.section}
          >
            <Typography className={classes.sectionTitle} component="h3">
              {t('partnership_howworks_title')}
            </Typography>
            <Typography className={classes.paragraph}>
              {t('partnership_howworks_desc1')}
            </Typography>
            <Typography className={classes.paragraph}>
              {t('partnership_howworks_desc2')}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className={classes.section}
          >
            <Typography className={classes.sectionTitle} component="h3">
              {t('partnership_eligibility_title')}
            </Typography>
            <Typography className={classes.paragraph}>
              {t('partnership_eligibility_desc1')}
            </Typography>
            <Typography className={classes.paragraph}>
              {t('partnership_eligibility_desc2')}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className={classes.cta}
          >
            <Typography className={classes.ctaTitle} component="h3">
              {t('partnership_cta_title')}
            </Typography>
            <Typography className={classes.ctaText}>
              {t('partnership_cta_desc')}
            </Typography>
            <Link href="/voice-cloning" passHref>
              <Button
                variant="contained"
                color="primary"
                className={classes.ctaButton}
                size="large"
              >
                {t('partnership_apply_btn')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Partnership;
