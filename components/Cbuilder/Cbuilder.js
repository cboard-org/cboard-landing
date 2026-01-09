import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Title from 'components/Title';
import useStyles from './cbuilder-style';

function Cbuilder() {
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
            <Title align="center">{t('cbuilder_title')}</Title>
          </div>
          <Typography className={classes.subtitle} component="h2">
            {t('cbuilder_subtitle')}
          </Typography>
        </motion.div>

        <div className={classes.logoContainer}>
          <img
            src="/images/cbuilder/desktop_illustration.gif"
            alt="Cbuilder Illustration"
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
                {t('cbuilder_quote')}
                &rdquo;
              </Typography>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className={classes.cta}
          >
            <Typography className={classes.ctaTitle} component="h3">
              {t('cbuilder_cta_title')}
            </Typography>
            <Typography className={classes.ctaText}>
              {t('cbuilder_cta_desc')}
            </Typography>
            <Link href="https://www.cbuilder.io/" passHref>
              <Button
                variant="contained"
                color="primary"
                className={classes.ctaButton}
                size="large"
              >
                {t('cbuilder_cta_button')}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={classes.section}
          >
            <Typography className={classes.sectionTitle} component="h3">
              {t('cbuilder_about_title')}
            </Typography>
            <Typography className={classes.paragraph}>
              {t('cbuilder_about_desc1')}
            </Typography>
            <Typography className={classes.paragraph}>
              {t('cbuilder_about_desc2')}
            </Typography>
            <img
              src="/images/slp-with-child.png"
              alt="Cbuilder Core Board"
              className={classes.image}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={classes.section}
          >
            <Typography className={classes.sectionTitle} component="h3">
              {t('cbuilder_benefits_title')}
            </Typography>
            <div className={classes.benefitsList}>
              <ul>
                <li>{t('cbuilder_benefit1')}</li>
                <li>{t('cbuilder_benefit2')}</li>
                <li>{t('cbuilder_benefit3')}</li>
                <li>{t('cbuilder_benefit4')}</li>
                <li>{t('cbuilder_benefit5')}</li>
                <li>{t('cbuilder_benefit6')}</li>
                <li>{t('cbuilder_benefit7')}</li>
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
              {t('cbuilder_howworks_title')}
            </Typography>
            <Typography className={classes.paragraph}>
              {t('cbuilder_howworks_desc1')}
            </Typography>
            <Typography className={classes.paragraph}>
              {t('cbuilder_howworks_desc2')}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className={classes.cta}
          >
            <Typography className={classes.ctaTitle} component="h3">
              {t('cbuilder_cta_title')}
            </Typography>
            <Typography className={classes.ctaText}>
              {t('cbuilder_cta_desc')}
            </Typography>
            <Link href="https://www.cbuilder.io/" passHref>
              <Button
                variant="contained"
                color="primary"
                className={classes.ctaButton}
                size="large"
              >
                {t('cbuilder_cta_button')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Cbuilder;
