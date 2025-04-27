import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { useTranslation } from 'react-i18next'; // Import useTranslation

import useStyles from './blogMainFeaturedPost-style';

export default function BlogMainFeaturedPost(props) {
  const { classes } = useStyles();
  const { post } = props;
  const { i18n } = useTranslation(); // Use i18next's useTranslation hook
  const locale = i18n.language; // Get the current locale

  return (
    <CardActionArea component="a" href={`/${locale}/blog/${post.slug}`}>
      <Card className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${post.image})` }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={post.image} alt={post.title} />}
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
              <Link
                as={`/${locale}/blog/${post.slug}`}
                href="/[locale]/blog/[slug]"
              >
                Continue reading…
              </Link>
            </div>
          </Grid>
        </Grid>
      </Card>
    </CardActionArea>
  );
}

BlogMainFeaturedPost.propTypes = {
  post: PropTypes.object
};
