import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


import useStyles from './blogMainFeaturedPost-style';

export default function BlogMainFeaturedPost(props) {
  const { classes } = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${post.metadata.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.metadata.image} alt={post.metadata.title} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.metadata.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.metadata.description}
            </Typography>
            <Link variant="subtitle1" href="#">
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
