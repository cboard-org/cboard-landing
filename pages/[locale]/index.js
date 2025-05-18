import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'next-i18next';
import CssBaseline from '@mui/material/CssBaseline';
import { getStaticPaths, makeStaticPropsWithPosts } from 'lib/getStatic';
import brand from 'public/text/brand';
import MainContainer from 'components/MainContainer';
import Banner from 'components/Banner';
import Counter from 'components/Counter';
import Feature from 'components/Feature';
import Showcase from 'components/Showcase';
import Testimonials from 'components/Testimonials';
import Faq from 'components/Faq';
import CompanyLogo from 'components/CompanyLogo';
import NewsEvent from 'components/NewsEvent';
import PageNav from 'components/PageNav';
import Notification from 'components/Notification';
import HTMLHead from 'components/HTMLHead';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(6),
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(10),
    }
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10),
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(2),
    }
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(2),
    }
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function HomePage(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir, posts, locale } = props;
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const { t } = useTranslation('common');

  return (
    <Fragment>
      <HTMLHead
        title={brand.cboard.name + ' | ' + t("title_home") + ' - ' + t("title_slogan")}
        locale={locale}
        page=''
      />
      <CssBaseline />
      <MainContainer
        onToggleDark={onToggleDark}
        onToggleDir={onToggleDir}
        footerDeco
      >
        <Fragment>
          <main className={classes.containerWrap}>
            <section id="home">
              <Banner />
            </section>
            <section id="counter">
              <Counter />
            </section>
            <section id="feature" className={classes.spaceTop}>
              <Feature />
            </section>
            <section id="showcase">
              <Showcase />
            </section>
            <section id="testimonials">
              <Testimonials />
            </section>
            <section id="faq" className={classes.spaceTopShort}>
              <Faq />
            </section>
            <section className={classes.spaceTopShort}>
              <CompanyLogo />
            </section>
            <section id="news" className={classes.spaceTopShort}>
              <NewsEvent posts={posts} />
            </section>
          </main>
          {!isTablet && (
            <Fragment>
              <PageNav />
              <Notification />
            </Fragment>
          )}
        </Fragment>
      </MainContainer>
    </Fragment>
  );
}

HomePage.propTypes = {
  posts: PropTypes.array.isRequired,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticPropsWithPosts(['common']);
export { getStaticPaths, getStaticProps };

export default HomePage;
