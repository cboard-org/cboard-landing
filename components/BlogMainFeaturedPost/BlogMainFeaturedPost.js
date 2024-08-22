import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LinkMui from '@mui/material/Link';
import Link from 'next/link';


import useStyles from './blogMainFeaturedPost-style';

export default function BlogMainFeaturedPost(props) {
  const { classes } = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost}
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
              as={`/en/blog/${post.slug}`}
              href="/[locale]/blog/[slug]"
            >
              Continue reading…
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

BlogMainFeaturedPost.propTypes = {
  post: PropTypes.object
};
