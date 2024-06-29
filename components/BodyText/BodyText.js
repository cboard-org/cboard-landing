import React, { useEffect, useState, useRef } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import useStyles from './bodytext-style';
import { useText } from 'theme/common';

function BodyText(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const [content, setContent] = useState('');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const elem = useRef(null);

  useEffect(() => {
    const fetchContent = async () => {
      const data = await fetch(props.filePath).then(res => res.text());
      setContent(data);

    }
    fetchContent().catch(console.error);
  }, []);

  return (
    <div className={classes.root} ref={elem}>
      <motion.div>
        <Container>
          <Grid container>
            <div className={classes.text}>
              {content &&
                <ReactMarkdown skipHtml={true}>
                  {content}
                </ReactMarkdown>}
            </div>
          </Grid>
        </Container>
      </motion.div>
    </div>
  )
}

export default BodyText;
