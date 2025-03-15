import React, { Fragment, useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import { useText } from 'theme/common';
import particleSpray from './particle-spray';
import useStyles from './banner-style';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { sendGAEvent } from '@next/third-parties/google';

function Banner() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const elem = useRef(null);

  useEffect(() => {
    particleSpray();
  }, []);

  return (
    <div className={classes.root} ref={elem}>
      <motion.div>
        <div className={classes.background}>
          <div className={classes.gradient}>
            <div className={classes.decoWave} />
            {!isMobile && (
              <div className={classes.decoLine} />
            )}
            <div className={classes.decoInner}>
              <canvas id="particle_art_mobile" width="500px" height="700px" />
            </div>
          </div>
        </div>
        <Container className={classes.container} fixed={isDesktop}>
          <Grid container>
            <Grid item md={7} xs={12}>
              <div className={classes.text}>
                <Typography variant="h1" className={text.title}>
                  {t('banner_title')}
                  &nbsp;
                  <strong>
                    {t('banner_titlestrong')}
                  </strong>
                </Typography>
                <Typography variant="h5" className={text.subtitle}>
                  {t('banner_desc')}
                </Typography>
                <Button
                  component={Link} href="https://app.cboard.io/"
                  onClick={() => sendGAEvent('event', 'open_web_app', 'banner')}
                  aria-label="cboard-app"
                  variant="contained"
                  className={classes.openCboard}
                  size="large">
                  {t('cta_btn')}
                </Button>
                <div className={classes.btnArea}>
                  <Link
                    href="https://apps.apple.com/gb/app/aac-cboard-app/id6453683048"
                    onClick={() => sendGAEvent('event', 'open_ios_store', 'banner')}>
                    <img src="/images/mobile/app-store.png" alt="app store" />
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.unicef.cboard"
                    onClick={() => sendGAEvent('event', 'open_android_store', 'banner')}>
                    <img src="/images/mobile/play-store.png" alt="play store" />
                  </Link>
                  <Link
                    href="https://apps.microsoft.com/store/detail/XP9M5KQV699FLR"
                    onClick={() => sendGAEvent('event', 'open_microsoft_store', 'banner')}>
                    <img src="/images/mobile/ms-store.png" alt="microsoft store" />
                  </Link>
                  <Link
                    href="https://www.amazon.com/-/en/dp/B0BWGZBQ7V/ref=sr_1_2?crid=3KHHTU961DJKE&keywords=cboard&qid=1684203554&s=mobile-apps&sprefix=%2Cmobile-apps%2C245&sr=1-2"
                    onClick={() => sendGAEvent('event', 'open_amazon_store', 'banner')}>
                    <img src="/images/mobile/amazon-store.png" alt="amazon store" />
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item md={5} xs={12}>
              <div className={classes.decoration}>
                <div className={classes.phoneIllustration}>
                  <img src={imgAPI.mobile[0]} className={classes.phone} alt="illustration" />
                  {!isTablet && (
                    <Fragment>
                      <motion.img
                        src={imgAPI.mobile[1]}
                        className={cx(classes.widgetTop, 'fragment-fadeUp')}
                        alt="illustration"
                        animate={{ scale: 1.2 }}
                        transition={{ duration: 2 }} />
                      <motion.img
                        src={imgAPI.mobile[2]}
                        className={cx(classes.widgetLeft, 'fragment-fadeUp')}
                        alt="illustration"
                        animate={{ scale: 1.2 }}
                        transition={{ duration: 2 }} />
                      <motion.img
                        src={imgAPI.mobile[3]}
                        className={cx(classes.widgetRight, 'fragment-fadeUp')}
                        alt="illustration"
                        animate={{ scale: 1.2 }}
                        transition={{ duration: 2 }} />
                    </Fragment>
                  )}
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </div>
  );
}

export default Banner;
