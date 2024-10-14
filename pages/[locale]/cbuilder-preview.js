import React, { Fragment } from 'react';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import brand from 'public/text/brand';
import ContactFrm from 'components/Forms/ProductPreview';
import { CssBaseline, useMediaQuery } from '@mui/material';
import MainContainer from 'components/MainContainer';
import PropTypes from 'prop-types';
import PageNav from 'components/PageNav';

const useStyles = makeStyles({ uniqId: 'cbuilder-preview' })(theme => ({
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

function CbuilderPreview(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));

  return (
    <Fragment>
      <Head>
        <title>
          {brand.mobile.name + ' - Cbuilder Preview'}
        </title>
      </Head>
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

CbuilderPreview.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default CbuilderPreview;
