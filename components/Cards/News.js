import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useStyles from './cards-style';
import Link from 'next/link';

export default function News(props) {
  const { classes, cx } = useStyles();
  const {
    caption,
    text,
    img,
    type,
    slug
  } = props;
  const setOrientation = orientation => {
    if (orientation === 'landscape') {
      return classes.landscape;
    }
    return classes.potrait;
  };
  return (
    <div className={cx(classes.news, setOrientation(type))}>
      <figure>
        <img src={img} alt="thumb" />
      </figure>
      <Paper className={classes.desc}>
        <div className={classes.text}>
          <Typography variant="caption" className={classes.type}>{caption}</Typography>
          <Typography display="block" component="p">{text}</Typography>
        </div>
        <div className={classes.btn}>
          <Link href={'/blog/' + slug} >Read more</Link>
        </div>
      </Paper>
    </div>
  );
}

News.propTypes = {
  caption: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
