import { serverSideTranslations as ssgTranslate } from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../next-i18next.config';
import { getAllPosts, getInfoBySlug, getAllAnnouncements } from './getPosts';

export const getI18nPaths = () => i18nextConfig.i18n.locales.map((lng) => ({
  params: {
    locale: lng
  },
}));

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: getI18nPaths(),
  };
}

export const getStaticPathsWithPosts = () => {
  return {
    fallback: false,
    paths: getPathsWithPosts(),
  };
}

export const getI18nProps = async (ctx, ns = ['common']) => {
  const locale = ctx?.params?.locale;
  const props = {
    ...(await ssgTranslate(locale, ns)),
  };
  return props;
};

export const makeStaticProps = (ns = []) => async (ctx) => ({
  props: await getI18nProps(ctx, ns),
});

export const makeStaticPropsWithPosts = (ns = []) => async (ctx) => {
  const locale = ctx?.params?.locale;
  const directory = locale ? `public/locales/${locale}/posts` : 'public/locales/en/posts';
  return {
    props: {
      ...(await getI18nProps(ctx, ns)),
      posts: JSON.parse(JSON.stringify(getAllPosts(directory))),
      announcements: JSON.parse(JSON.stringify(getAllAnnouncements()))
    }
  };
};

export const makeStaticPropsSinglePost = (ns = []) => async (ctx) => {
  const locale = ctx?.params?.locale;
  const directory = locale ? `public/locales/${locale}/posts` : 'public/locales/en/posts';
  const post = getInfoBySlug(ctx?.params?.slug, directory);
  return {
    props: {
      ...(await getI18nProps(ctx, ns)),
      post: JSON.parse(JSON.stringify(post)),
    },
  }
};