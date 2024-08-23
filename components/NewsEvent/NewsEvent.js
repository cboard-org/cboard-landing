import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Title from '../Title';
import NewsCard from '../Cards/News';
import ParallaxLarge from '../Parallax/Large';
import imgAPI from 'public/images/imgAPI';
import useStyle from './news-event-style';

function NewsEvent(props) {
  const { classes } = useStyle();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const { posts } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <div className={classes.decoBgTop} />
      <div className={classes.parallaxEvent}>
        <ParallaxLarge />
      </div>
      <Title align="center">
        {t('mobile-landing.news_title')}
      </Title>
      <Typography align="center" className={text.subtitle2}>
        {t('mobile-landing.news_desc')}
      </Typography>
      <div className={classes.blogWrap}>
        <Container fixed>
          <Grid container spacing={6} className={classes.listNews}>
            <Grid item md={6}>
              <NewsCard
                type="potrait"
                img={posts[0].image}
                caption="headline"
                text={posts[0].title}
                slug={posts[0].slug}
              />
            </Grid>
            <Grid item md={6}>
              <NewsCard
                type={isMobile ? 'potrait' : 'landscape'}
                img={posts[1].image}
                caption="news"
                text={posts[1].title}
                slug={posts[1].slug}
              />
              <NewsCard
                type="landscape"
                img={posts[2].image}
                caption="news"
                text={posts[2].title}
                slug={posts[2].slug}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default NewsEvent;
