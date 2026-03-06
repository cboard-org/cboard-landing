import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { useTranslation } from 'next-i18next';
import Title from '../Title';
import useStyles from './partners-style';

const partners = [
  {
    name: 'Microsoft',
    url: 'https://www.microsoft.com',
    logo: '/images/logos/microsoft.png',
  },
  {
    name: 'UNICEF',
    url: 'https://www.unicef.org',
    logo: '/images/logos/unicef.png',
  },
  {
    name: 'Government of Uruguay',
    url: 'https://www.gub.uy',
    logo: '/images/logos/ceibal.png',
  },
  {
    name: 'ElevenLabs',
    url: 'https://www.elevenlabs.com',
    logo: '/images/logos/elevenlabs.png',
  },
  {
    name: 'Learning Cabinet',
    url: 'https://www.learningcabinet.com',
    logo: '/images/logos/learning-cabinet-logo.png',
  },
  {
    name: 'GES Awards',
    url: 'https://www.gesawards.com',
    logo: '/images/logos/gesawards.jpg',
  },
  {
    name: 'Investorlist.com',
    url: 'https://www.investorlist.com',
    logo: '/images/logos/logo_investor_list.svg',
  },
];

function Partners() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <div>
        <Title align="center">{t('partners_title')}</Title>
      </div>
      <div className={classes.contentText}>
        <Typography variant="h5">
          {t('partners_subtitle')}
        </Typography>
      </div>
      <Container fixed>
        <Grid container spacing={4} className={classes.grid}>
          {partners.map((partner) => (
            <Grid item xs={12} sm={6} md={4} key={partner.name}>
              <Card className={classes.card}>
                <CardActionArea
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    image={partner.logo}
                    alt={partner.name}
                    className={classes.media}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6" className={classes.partnerName}>
                      {partner.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Partners;
