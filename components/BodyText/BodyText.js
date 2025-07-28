import React, { useEffect, useState, useRef } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import { useText } from 'theme/common';
import useStyles from './bodytext-style';
import rehypeRaw from 'rehype-raw'
import PropTypes from 'prop-types';

function BodyText(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const [content, setContent] = useState('');
  const theme = useTheme();
  const elem = useRef(null);

  useEffect(() => {
    const fetchContent = async () => {
      const data = await fetch(props.filePath).then(res => res.text());
      setContent(data);
    };
    fetchContent().catch(console.error);
  }, []);

  return (
    <div className={classes.root} ref={elem}>
      <motion.div>
        <Container className={classes.containerWrap}>
          <Grid container>
            <div className={classes.text}>
              {content
                && (
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {content}
                </ReactMarkdown>
)}
            </div>
          </Grid>
        </Container>
      </motion.div>
    </div>
  );
}

export default BodyText;
