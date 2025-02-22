import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
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

function BlogPage(props) {
    const { classes } = useStyles();
    const { onToggleDark, onToggleDir, posts, announcements } = props;
    const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));
      const { t } = useTranslation('common');

    return (
        <Fragment>
            <Head>
                <title>
                    {brand.mobile.name + ' | ' + t("title_blog")}
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
                        <section id="blogPreview">
                            <BlogPostsPreview
                                posts={posts}
                                announcements={announcements} />
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
};

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticPropsWithPosts(['common']);
export { getStaticPaths, getStaticProps };

export default BlogPage;
