import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import brand from '../../../public/text/brand';
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
    const { post, locale, onToggleDark, onToggleDir } = props;

    if (!post) {
        return notFound();
    }
    return (
        <Fragment>
            <Head>
                {/* Meta Tags */}
                <title>{post.title + ' | Cboard Blog'}</title>
                <meta name="title" content={post.title + ' | Cboard Blog'} />
                <meta name="description" content={post.description || brand.cboard.desc} />
                <meta name="keywords" content={post.categories} />
                <meta name="author" content={post.author_staff_member || 'Cboard Team'} />
                {/* SEO Meta Tags */}
                <meta name="language" content={locale || 'en_EN'} />
                <link rel="canonical" href={'https://www.cboard.io/blog/' + post.slug} />
                <link rel="next" href={'https://www.cboard.io/blog/' + post.slug} />
                {/* Open Graph Meta Tags */}
                <meta name="twitter:title" content={post.title + ' | Cboard Blog'} />
                <meta name="twitter:description" content={post.description || brand.cboard.desc} />
                <meta name="twitter:image" content={'https://cboard.io' + post.image} />
                <meta name="twitter:url" content={'https://www.cboard.io' + post.slug} />
                <meta name="twitter:image:alt" content={post.title + ' | Cboard Blog'} />

                <meta property="og:title" content={post.title + ' | Cboard Blog'} />
                <meta property="og:description" content={post.description || brand.cboard.desc} />
                <meta property="og:image" itemProp='image' content={'https://cboard.io' + post.image} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={post.title + ' | Cboard Blog'} />
                <meta property="og:url" content={'https://cboard.io' + post.slug} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Cboard Blog" />
                <meta property="og:locale" content={locale || i18nextConfig.i18n.defaultLocale} />
                <meta property="article:published_time" content={post.date} />

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
