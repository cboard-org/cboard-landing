import React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import useStyles from './pricing-style';
import GithubIcon from '@mui/icons-material/GitHub';
import PaidIcon from '@mui/icons-material/Paid';
import PublicIcon from '@mui/icons-material/Public';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Title from 'components/Title';
import { Box, Button, Card, CardContent, Grid2, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import Link from 'next/link';

function Pricing() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  const pricingContent = [
    {
      id: 1,
      title: t('mobile-landing.pricing.title1'),
      currencyCode: 'USD',
      units: '0',
      billingPeriod: t('mobile-landing.pricing.billingPeriod1'),
      text: t('mobile-landing.pricing.text1'),
      icon: <GithubIcon />,
    },
    {
      id: 2,
      title: t('mobile-landing.pricing.title2'),
      currencyCode: 'USD',
      units: '8',
      billingPeriod: t('mobile-landing.pricing.billingPeriod2'),
      text: t('mobile-landing.pricing.text2'),
      icon: <PaidIcon />,
    },
    {
      id: 3,
      title: t('mobile-landing.pricing.title3'),
      currencyCode: 'USD',
      units: '79',
      billingPeriod: t('mobile-landing.pricing.billingPeriod3'),
      text: t('mobile-landing.pricing.text3'),
      icon: <PublicIcon />,
    },
  ];
  const includedFeatures = [
    t('mobile-landing.pricing.feature1'),
    t('mobile-landing.pricing.feature2'),
    t('mobile-landing.pricing.feature3'),
    t('mobile-landing.pricing.feature4'),
    t('mobile-landing.pricing.feature5'),
    t('mobile-landing.pricing.feature6'),
    t('mobile-landing.pricing.feature7'),
    t('mobile-landing.pricing.feature8'),
    t('mobile-landing.pricing.feature9'),
    t('mobile-landing.pricing.feature10'),
    t('mobile-landing.pricing.feature11'),
  ];

  return (
    <div className={classes.root}>
      <div>
        <Title align="center">
          {t('mobile-landing.pricing.title')}
        </Title>
      </div>
      <Grid2
        container
        className={classes.pricingWrap}
        spacing={0}
        alignItems="center"
        justifyContent="center"
      >
        {pricingContent.map(product => {
          return [
            <Grid2
              key={product.id}
              item
              xs={12}
              sm={6}
              style={{ padding: '5px', maxWidth: 328 }}
            >
              <Card style={{ minWidth: 275 }} variant="outlined">
                <CardContent>
                  <Typography
                    color="secondary"
                    gutterBottom
                    className={classes.titles}
                  >
                    {product.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      {product.currencyCode} {product.units}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /{product.billingPeriod}
                    </Typography>
                  </Box>
                  <Button
                    component={Link} href={product.id === 1 ? "https://app.cboard.io/" : "https://app.cboard.io/settings/subscribe"}
                    style={{ width: '90%' }}
                    variant="contained"
                    color={product.id === 1 ? "success" : "primary"}
                  >
                    {product.id === 1
                      ? t('mobile-landing.pricing.getStarted')
                      : t('mobile-landing.pricing.subscribe')}
                  </Button>
                  <Typography color="secondary">
                    <br />
                    {product.text}
                  </Typography>
                  <List disablePadding style={{ padding: '5px' }}>
                    {includedFeatures.map(feature => {
                      return [
                        <ListItem key={feature}>
                          <ListItemIcon className={product.id === 1 ? classes.iconRed : classes.icon}>
                            {product.id === 1 ? <CancelIcon /> : <CheckCircleIcon />}
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            secondary={null}
                          />
                        </ListItem>
                      ];
                    })}
                  </List>
                </CardContent>
                {/*  //TODO
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
              </Card>
            </Grid2>
          ];
        })}
      </Grid2>
    </div>
  );
}

export default Pricing;
