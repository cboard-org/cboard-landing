import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Hidden from '@mui/material/Hidden';

import useStyles from './blogFeaturedPost-style';


export default function BlogFeaturedPost(props) {
  const { classes } = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.metadata.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.metadata.date.toDateString()}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.metadata.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.metadata.image} title={post.metadata.title} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

BlogFeaturedPost.propTypes = {
  post: PropTypes.object,
};
