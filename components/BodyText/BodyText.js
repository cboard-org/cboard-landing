import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import ReactMarkdown from 'react-markdown';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import { useText } from 'theme/common';
import yt from 'youtube';
import Title from '../Title';
import useStyles from './bodytext-style';

const markdown = `
This information is only held by the company to support use of Cboard and offer help when necessary. It is not shared with other organizations, (See [Privacy details](https://www.cboard.io/privacy/)).

Once you have verified your account you will have access to Cboard, and will receive another e-mail confirming you were successfully verified your account.

### <a name='CanIregistermyselfusingmysocialmediaaccounts'></a>Can I register myself using my social media accounts?
`;
const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function BodyText() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [player, setPlayer] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [markdown, setMarkdown] = useState([]);


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
      <Title align="center">
        {t('mobile-landing.feature_title')}
      </Title>
      <Container fixed>
        <Paper aria-label="privacy-policy" className="Help">
          <ReactMarkdown>
            markdown
          </ReactMarkdown>
        </Paper>
      </Container>
    </div>
  );
}

export default BodyText;
