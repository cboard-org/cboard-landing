/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ReactMarkdown from 'react-markdown';

import useStyles from './blogMain-style';

export default function BlogMain(props) {
  const { classes } = useStyles();
  const { announcements, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {announcements.map((post) => (
        <ReactMarkdown className={classes.markdown} key={post.content.substring(0, 40)}>
          {post.content}
        </ReactMarkdown>
      ))}
    </Grid>
  );
}

BlogMain.propTypes = {
  announcements: PropTypes.array,
  title: PropTypes.string,
};
