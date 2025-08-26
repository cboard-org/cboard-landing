import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'next-i18next';
import CssBaseline from '@mui/material/CssBaseline';
import { getStaticPaths, makeStaticPropsWithPosts } from 'lib/getStatic';
import brand from 'public/text/brand';
import MainContainer from 'components/MainContainer';
import BlogPostsPreview from 'components/BlogPostsPreview';
import BlogPostsPagination from 'components/BlogPostsPagination';
import PageNav from 'components/PageNav';
import Notification from 'components/Notification';
import HTMLHead from 'components/HTMLHead';

const sectionMargin = (margin) => margin * 20;
const useStyles = makeStyles({ uniqId: 'home' })((theme) => ({
  spaceBottom: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(6),
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(10),
    },
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10),
    },
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(2),
    },
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(2),
    },
  },
  containerWrap: {
    background: theme.palette.background.paper,
    marginTop: -40,
    '& > section': {
      position: 'relative',
    },
  },
}));

function BlogPage(props) {
  const { classes } = useStyles();
  const {
 onToggleDark, onToggleDir, posts, announcements, locale
} = props;
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const { t } = useTranslation('common');

  return (
    <Fragment>
      <HTMLHead
        title={
          brand.cboard.name
          + ' | '
          + t('title_blog')
          + ' - '
          + t('title_slogan')
        }
        locale={locale}
        page="blog"
      />
      <CssBaseline />
      <MainContainer
        onToggleDark={onToggleDark}
        onToggleDir={onToggleDir}
        footerDeco
      >
        <Fragment>
          <main className={classes.containerWrap}>
            <section id="blogPreview">
              <BlogPostsPreview posts={posts} announcements={announcements} />
              <BlogPostsPagination />
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

BlogPage.propTypes = {
  posts: PropTypes.array.isRequired,
  announcements: PropTypes.array.isRequired,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticPropsWithPosts(['common']);
export { getStaticPaths, getStaticProps };

export default BlogPage;
