import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import YouTube from 'react-youtube';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Zoom from '@mui/material/Zoom';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import { useText } from 'theme/common';
import yt from 'youtube';
import ParallaxSmall from '../Parallax/Small';
import ParallaxMedium from '../Parallax/Medium';
import TitleSecondary from '../Title/TitleSecondary';
import Title from '../Title';
import useStyles from './feature-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function Feature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [player, setPlayer] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    if (yt.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'http://localhost:3007'
    }
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.videoPopup }}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {t('feature_video')}
          <IconButton onClick={handleClose} className={classes.closeBtn} size="large">
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId="pW1hRkibfps"
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      <Title align="center">
        {t('feature_title')}
      </Title>
      <Container fixed>
        <div className={cx(classes.item, classes.first)}>
          <Grid container direction={isMobile ? 'column-reverse' : 'row'}>
            <Grid item md={6} xs={12}>
              <div className={classes.illustrationLeft}>
                <svg className={classes.decoPrimary}>
                  <use xlinkHref="/images/mobile/deco-feature.svg#main" />
                </svg>
                <ParallaxSmall />
                <figure className={classes.screen}>
                  <img src={imgAPI.mobile[4]} alt="illustration" />
                </figure>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={classes.text}>
                <TitleSecondary align={isMobile ? 'center' : 'left'} text={t('feature_title1')} />
                <Typography display="block" component="p" className={text.subtitle2}>
                  {t('feature_desc1')}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <div className={classes.bgColor}>
        <div className={classes.decoBgTop} />
        <Container fixed>
          <div className={classes.item}>
            <Grid container>
              <Grid item md={6} xs={12}>
                <div className={classes.text}>
                  <TitleSecondary align={isMobile ? 'center' : 'left'} text={t('feature_title2')} />
                  <Typography display="block" component="p" className={text.subtitle2}>
                    {t('feature_desc2')}
                  </Typography>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.illustrationRight}>
                  <svg className={classes.decoSecondary}>
                    <use xlinkHref="/images/mobile/deco-feature.svg#main" />
                  </svg>
                  <ParallaxSmall />
                  <figure className={classes.screen}>
                    <img src={imgAPI.mobile[5]} alt="screen" />
                  </figure>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={cx(classes.item, classes.last)}>
            <TitleSecondary align="center" text={t('feature_title3')} />
            <Typography align="center" component="p" className={text.subtitle2}>
              {t('feature_desc3')}
            </Typography>
            <Container maxWidth="sm">
              <Grid container>
                <Grid item md={12} xs={12}>
                  <div className={classes.illustrationCenter}>
                    <svg className={classes.decoPrimaryBig}>
                      <use xlinkHref="/images/mobile/deco-feature.svg#main" />
                    </svg>
                    <ParallaxMedium />
                    <Paper className={classes.video}>
                      <img src={imgAPI.mobile[6]} alt="screen" />
                      <Typography variant="h6">
                        {t('feature_watch')}
                      </Typography>
                      <IconButton className={classes.button} onClick={handleClickOpen} size="large">
                        <i className="ion-ios-play-outline" />
                      </IconButton>
                    </Paper>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Feature;
