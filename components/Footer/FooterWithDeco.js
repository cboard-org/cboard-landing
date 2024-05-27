import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Footer from './Footer';
import useStyles from './footer-style';

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
          {t('mobile-landing.footer_text')}
        </Typography>
        <div className={classes.btnArea}>
          <Link href="/">
            <img src="/images/mobile/app-store.png" alt="app store" />
          </Link>
          <Link href="/">
            <img src="/images/mobile/play-store.png" alt="play store" />
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
