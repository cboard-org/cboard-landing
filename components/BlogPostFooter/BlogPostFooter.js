import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Avatar } from '@mui/material';

import useStyles from './blogPostFooter-style';
import { useTranslation } from 'react-i18next';

export default function BlogPostFooter(props) {
  const { classes } = useStyles();
  const { post } = props;
    const { t } = useTranslation('common');

  return (
    <div className={classes.footer}>
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "top",
        }}
        spacing={8}>
        <Grid item>
          <Typography variant="h6">{t('author')}:</Typography>
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
    </div>
  );
}

BlogPostFooter.propTypes = {
  post: PropTypes.object.isRequired,
};
