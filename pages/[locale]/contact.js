import React, { Fragment } from 'react';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import brand from 'public/text/brand';
import ContactFrm from 'components/Forms/Contact';

const useStyles = makeStyles({ uniqId: 'contactpage' })(theme => ({
  mainWrap: {
    background: theme.palette.background.paper,
  },
}));

function Contact() {
  const { classes } = useStyles();

  return (
    <Fragment>
      <Head>
        <title>
          { brand.mobile.name + ' - Contact' }
        </title>
      </Head>
      <div className={classes.mainWrap}>
        <ContactFrm />
      </div>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Contact;
