import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
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
        <ReactMarkdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </ReactMarkdown>
      ))}
    </Grid>
  );
}

BlogMain.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
