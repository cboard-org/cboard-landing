import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import useStyles from './blogPostHero-style';

export default function BlogPostHero(props) {
  const { classes } = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.paper}
      style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.title} />}
      <div className={classes.overlay} />
      <div className={classes.content}>
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="h5" color="inherit" paragraph>
          {post.description}
        </Typography>
      </div>
    </Paper>
  );
}

BlogPostHero.propTypes = {
  post: PropTypes.object
};
