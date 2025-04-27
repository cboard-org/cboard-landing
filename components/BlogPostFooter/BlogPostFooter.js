import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Avatar } from '@mui/material';

import useStyles from './blogPostFooter-style';

export default function BlogPostFooter(props) {
  const { classes } = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.footer}>
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "top",
        }}
        spacing={8}>
        <Grid item>
          <Typography variant="h6">Author:</Typography>
        </Grid>
        <Grid item container
          direction={"column"}
          spacing={0}
          alignItems={"center"}>
          <Grid item>
            <Avatar
              alt={post.author_staff_member}
              src={`/images/team/${post.author_staff_member}.jpg`}
              className={classes.avatar}
            />
          </Grid>
          <Grid item>
            <Typography className={classes.label} variant="h6">{post.author_staff_member}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

BlogPostFooter.propTypes = {
  post: PropTypes.object.isRequired,
};
