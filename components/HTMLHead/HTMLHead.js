import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import brand from '../../public/text/brand';
import i18nextConfig from '../../next-i18next.config';

const HTMLHead = ({
 title, locale, post = '', page = '', image = ''
}) => (
  <Head>
    {/* Meta Tags */}
    <title>{post ? post.title + ' | Cboard Blog' : title}</title>
    <meta name="title" content={post ? post.title + ' | Cboard Blog' : title} />
    <meta name="description" content={post?.description || brand.cboard.desc} />
    <meta name="keywords" content={post?.categories || ['cboard', 'AAC', 'AAC software']} />
    <meta name="author" content={post?.author_staff_member || 'Cboard Team'} />
    {/* SEO Meta Tags */}
    <meta name="language" content={locale || 'en_EN'} />
    <link rel="canonical" href={post ? brand.cboard.fullUrl + '/blog/' + post.slug : brand.cboard.fullUrl + '/' + page} />
    <link rel="next" href={post ? brand.cboard.fullUrl + '/blog/' + post.slug : brand.cboard.fullUrl + '/' + page} />
    {/* Open Graph Meta Tags */}
    <meta name="twitter:title" content={post ? post.title + ' | Cboard Blog' : title} />
    <meta name="twitter:description" content={post?.description || brand.cboard.desc} />
    <meta name="twitter:image" content={post ? brand.cboard.fullUrl + post.image : image || brand.cboard.img} />
    <meta name="twitter:url" content={post ? brand.cboard.fullUrl + post.slug : brand.cboard.fullUrl + '/' + page} />
    <meta name="twitter:image:alt" content={post ? post.title + ' | Cboard Blog' : title} />

    <meta property="og:title" content={post ? post.title + ' | Cboard Blog' : title} />
    <meta property="og:description" content={post?.description || brand.cboard.desc} />
    <meta property="og:image" itemProp="image" content={post ? brand.cboard.fullUrl + post.image : image || brand.cboard.img} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={post ? post.title + ' | Cboard Blog' : title} />
    <meta property="og:url" content={post ? brand.cboard.fullUrl + '/blog/' + post.slug : brand.cboard.fullUrl + '/' + page} />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content={post ? 'Cboard Blog' : brand.cboard.name} />
    <meta property="og:locale" content={locale || i18nextConfig.i18n.defaultLocale} />
    <meta property="article:published_time" content={post?.date || '2025-05-12'} />
  </Head>
);

HTMLHead.propTypes = {
    title: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    post: PropTypes.object,
    page: PropTypes.string,
    image: PropTypes.string
};

HTMLHead.defaultProps = {
    post: null,
    page: '',
    image: ''
};

export default HTMLHead;
