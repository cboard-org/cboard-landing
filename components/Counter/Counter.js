import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import useStyles from './counter-style';

function Counter() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const [play, setPlay] = useState(false);

  const countup = (val, isPlay, dec = 0) => (
    <span>
      {isPlay ? <CountUp
        end={val}
        decimals={dec}
        decimal="." /> : 0}
    </span>
  );

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <ScrollAnimation animateOnce animateIn="fadeIn" offset={1500} afterAnimatedIn={handlePlay}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.counterInner}
            spacing={6}
          >
            <Grid sm={4} xs={6} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography variant="h3" className={text.title}>
                    +
                    {countup(35, play)}
                    K
                  </Typography>
                  <Typography component="p" className={text.subtitle}>
                    <i className="ion-ios-cloud-download-outline" />
                    {t('counter_downloads')}
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid sm={4} xs={6} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography variant="h3" className={text.title}>
                    +
                    {countup(4.3, play, 1)}
                  </Typography>
                  <Typography component="p" className={text.subtitle}>
                    <i className="ion-ios-star-outline" />
                    {t('counter_ratting')}
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid sm={4} xs={6} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography variant="h3" className={text.title}>
                    +
                    {countup(480, play)}
                    K
                  </Typography>
                  <Typography component="p" className={text.subtitle}>
                    <i className="ion-ios-checkmark-circle-outline" />
                    {t('counter_transaction')}
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Container>
    </div>
  );
}

export default Counter;
