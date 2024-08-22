import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import useStyles from './blogPostBody-style';
import { Container, Grid } from '@mui/material';

export default function BlogPostBody(props) {
  const { classes } = useStyles();
  const elem = useRef(null);
  const { content } = props;

  return (
    <div className={classes.root} ref={elem}>
      <motion.div>
        <Container>
          <Grid container>
            <div className={classes.markdown}>
              {content &&
                <ReactMarkdown skipHtml={true}>
                  {content}
                </ReactMarkdown>}
            </div>
          </Grid>
        </Container>
      </motion.div>
    </div>
  );
}

BlogPostBody.propTypes = {
  content: PropTypes.string
};
