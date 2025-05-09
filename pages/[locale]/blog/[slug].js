import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { notFound } from "next/navigation";
import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStaticPropsSinglePost } from 'lib/getStatic';
import { getAllPosts } from 'lib/getPosts';
import MainContainer from 'components/MainContainer';
import i18nextConfig from '../../../next-i18next.config';
import BlogPostBody from 'components/BlogPostBody';
import BlogPostHero from 'components/BlogPostHero';
import BlogPostFooter from 'components/BlogPostFooter/BlogPostFooter';

const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
    containerWrap: {
        backgroundColor: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.65) : lighten(theme.palette.primary.light, 0.8),
        zIndex: 1,
        marginTop: -40,
        paddingBottom: theme.spacing(44),
        '& > section': {
            position: 'relative'
        }
    },
    hero: {
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(14),
            paddingBottom: theme.spacing(2),
            margin: theme.spacing(4)
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(16),
            paddingBottom: theme.spacing(2),
            margin: theme.spacing(1),
            width: "100%"
        }
    },
    body: {
        [theme.breakpoints.up('md')]: {
            paddingTop: 0,
            paddingBottom: theme.spacing(4),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            marginRight: theme.spacing(4),
            marginLeft: theme.spacing(4),
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: 0,
            paddingBottom: theme.spacing(4),
            margin: theme.spacing(1),
            width: "100%"
        }
    },
    footer: {
        position: 'relative',
        zIndex: 1,
        [theme.breakpoints.up('md')]: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            marginRight: theme.spacing(4),
            marginLeft: theme.spacing(4),
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: 0,
            paddingBottom: theme.spacing(46),
            margin: theme.spacing(1),
            width: "100%"
        }
    }
}));

function Post(props) {
    const { classes } = useStyles();
    const { post, onToggleDark, onToggleDir } = props;

    if (!post) {
        return notFound();
    }
    return (
        <Fragment>
            <Head>
                <title>{post.title + ' | Cboard Blog'}</title>
                <meta name="description" content={post.description || 'Cboard Blog Post'} />
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={post.title + ' | Cboard Blog'} />
                <meta property="og:description" content={post.description} />
                <meta property="og:image" content={post.image} />

            </Head>
            <CssBaseline />
            <MainContainer
                onToggleDark={onToggleDark}
                onToggleDir={onToggleDir}
                footerDeco
            >
                <Fragment>
                    <main className={classes.containerWrap}>
                        <section id="hero">

                            <Container maxWidth="lg">
                                <div className={classes.hero}>
                                    {<BlogPostHero post={post} />}
                                </div>
                            </Container>
                        </section>
                        <section id="body">
                            <Container maxWidth="lg">
                                <div className={classes.body}>
                                    <BlogPostBody content={post.content} />
                                </div>
                                <div className={classes.footer}>
                                    <BlogPostFooter post={post} />
                                </div>
                            </Container>
                        </section>
                    </main>
                </Fragment>
            </MainContainer>
        </Fragment>
    );
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    onToggleDark: PropTypes.func,
    onToggleDir: PropTypes.func,
};

export const getStaticPaths = () => {

    function getPathsWithPosts() {
        const posts = getAllPosts();
        var paramsArray = [];
        i18nextConfig.i18n.locales.forEach((lng) => {
            posts.forEach((post) => {
                paramsArray.push({
                    params: { slug: post.slug, locale: lng }
                });
            });
        });
        return paramsArray;
    }

    return {
        fallback: false,
        paths: getPathsWithPosts(),
    };
};

const getStaticProps = makeStaticPropsSinglePost(['common']);
export { getStaticProps };

export default Post;
