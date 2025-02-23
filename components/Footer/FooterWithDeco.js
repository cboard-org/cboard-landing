import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Footer from './Footer';
import useStyles from './footer-style';
import { sendGAEvent } from '@next/third-parties/google';

function FooterWithDeco(props) {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { toggleDir } = props;
  const { t } = useTranslation('common');

  return (
    <div className={classes.footerDeco}>
      <svg className={classes.decoTop}>
        <use xlinkHref="/images/mobile/deco-wave-top.svg#main" />
      </svg>
      <div className={classes.decoration} />
      <div className={classes.action}>
        <Typography variant="h4" className={text.subtitle}>
          {t('footer_text')}
        </Typography>
        <div className={classes.btnArea}>
          <Link
            href="https://app.cboard.io/"
            onClick={() => sendGAEvent('event', 'open_web_app', 'footer')}>
            <img src="/images/mobile/web-access.svg" alt="web app" />
          </Link>
          <Link
            href="https://apps.apple.com/gb/app/aac-cboard-app/id6453683048"
            onClick={() => sendGAEvent('event', 'open_ios_store', 'footer')}>
            <img src="/images/mobile/app-store.png" alt="app store" />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.unicef.cboard"
            onClick={() => sendGAEvent('event', 'open_android_store', 'footer')}>
            <img src="/images/mobile/play-store.png" alt="play store" />
          </Link>
          <Link
            href="https://apps.microsoft.com/store/detail/XP9M5KQV699FLR"
            onClick={() => sendGAEvent('event', 'open_microsoft_store', 'footer')}>
            <img src="/images/mobile/ms-store.png" alt="microsoft store" />
          </Link>
          <Link
            href="https://www.amazon.com/-/en/dp/B0BWGZBQ7V/ref=sr_1_2?crid=3KHHTU961DJKE&keywords=cboard&qid=1684203554&s=mobile-apps&sprefix=%2Cmobile-apps%2C245&sr=1-2"
            onClick={() => sendGAEvent('event', 'open_amazon_store', 'footer')}>
            <img src="/images/mobile/amazon-store.png" alt="amazon store" />
          </Link>
        </div>
      </div>
      <Footer toggleDir={toggleDir} />
    </div>
  );
}

FooterWithDeco.propTypes = {
  toggleDir: PropTypes.func.isRequired
};

export default FooterWithDeco;
