import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useStyles from './cards-style';

export default function News(props) {
  const { classes, cx } = useStyles();
  const {
    caption,
    text,
    img,
    type
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
        <Button size="small" className={classes.btn}>Read more</Button>
      </Paper>
    </div>
  );
}

News.propTypes = {
  caption: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
