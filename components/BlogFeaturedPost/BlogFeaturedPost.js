import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Hidden from '@mui/material/Hidden';
import { useTranslation } from 'react-i18next'; // Import useTranslation

import useStyles from './blogFeaturedPost-style';

export default function BlogFeaturedPost(props) {
  const { classes } = useStyles();
  const { post } = props;
  const d = new Date(post.date);
  const date = d.toDateString();
  const { t } = useTranslation('common');
  const { i18n } = useTranslation(); // Use i18next's useTranslation hook
  const locale = i18n.language; // Get the current locale

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={`/${locale}/blog/${post.slug}`}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Link
                as={`/${locale}/blog/${post.slug}`}
                href="/[locale]/blog/[slug]"
              >
                <Typography variant="subtitle1" color="primary">
                  {t('continue_reading')}
                </Typography>
              </Link>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.title} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

BlogFeaturedPost.propTypes = {
  post: PropTypes.object,
};
