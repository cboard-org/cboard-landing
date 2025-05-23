import React, { Fragment } from 'react';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import brand from 'public/text/brand';
import ContactFrm from 'components/Forms/Contact';
import { CssBaseline, useMediaQuery } from '@mui/material';
import MainContainer from 'components/MainContainer';
import PropTypes from 'prop-types';
import PageNav from 'components/PageNav';
import HTMLHead from 'components/HTMLHead';

const useStyles = makeStyles({ uniqId: 'contactpage' })(theme => ({
  mainWrap: {
    background: theme.palette.background.paper,
  },
  containerWrap: {
    marginTop: 40,
    marginBottom: theme.spacing(40),
    '& > section': {
      position: 'relative'
    }
  }
}));

function ContactPage(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir, locale } = props;
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const { t } = useTranslation('common');

  return (
    <Fragment>
      <HTMLHead
        title={brand.cboard.name + ' | ' + t("title_contact") + ' - ' + t("title_slogan")}
        locale={locale}
        page='contact'
      />
      <CssBaseline />
      <MainContainer
        onToggleDark={onToggleDark}
        onToggleDir={onToggleDir}
        footerDeco
      >
        <Fragment>
          <main className={classes.containerWrap}>
            <section id="contact">
              <ContactFrm />
            </section>
          </main>
          {!isTablet && (
            <Fragment>
              <PageNav />
            </Fragment>
          )}
        </Fragment>
      </MainContainer>
    </Fragment>
  );
}

ContactPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default ContactPage;
