import React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import Title from '../Title';
import useStyles from './locations-style';

function Locations() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <div>
        <Title align="center">
          {t('mobile-landing.locations_title')}
        </Title>
      </div>
      <div className={classes.contentText}>
        <Typography variant='h5'>
          {t('mobile-landing.locations_desc')}
        </Typography>
        <div className={classes.mainImg}>
          <img src="/images/world-map.png" alt="Locations" />
        </div>
      </div>
    </div>
  );
}

export default Locations;
