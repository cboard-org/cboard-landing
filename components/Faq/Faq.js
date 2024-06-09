import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import ParallaxMedium from '../Parallax/Medium';
import illustration from 'public/images/mobile/faq.png';
import Title from '../Title';
import useStyles from './faq-style';

const faqData = [
  {
    q: 'What is Cboard?',
    a: 'Cboard is a free web application for children and adults with speech and language impairments, facilitating communication with pictures and text-to-speech. '
  },
  {
    q: 'Can I register myself using my social media accounts?',
    a: 'Yes! On the login page, you will be given the option to sign up with your Google, Apple, or Facebook account if you wish to do so. You can also register with an e-mail address.'
  },
  {
    q: 'What is the difference between a registered and a non-registered user?',
    a: 'A registered user is able to personalize their boards, and the changes made will be saved to their account so that when they log back in, they can use their customized boards. A non-registered user won’t be able to save changes safely. We recommend registering just in case, so your changes are guaranteed to be saved.'
  },
  {
    q: 'Which languages are supported by Cboard?',
    a: 'Cboard comes with support for 46 languages. To select a different language go to SETTINGS – select LANGUAGE and those available will appear. Make a choice and a ‘tick’ will appear beside the language.'
  },
  {
    q: 'How do I print my board set in Cboard?',
    a: 'To print your board, press the printer logo on the left hand side of the black HOME bar, after having unlocked the HOME page. An Adobe Portable Document (.pdf) will be downloaded to your technology.'
  },
];

function Faq() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const [expanded, setExpanded] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation('common');
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Title align={isMobile ? 'center' : 'left'}>
              <strong>
                FAQ
              </strong>
            </Title>
            <Typography className={cx(classes.text, text.subtitle2)} align={isMobile ? 'center' : 'left'} component="p">
              {t('mobile-landing.faq_subtitle')}
            </Typography>
            {!isMobile && (
              <div className={classes.illustration}>
                <ParallaxMedium />
                <img src={illustration} alt="illustration" />
              </div>
            )}
          </Grid>
          <Grid item md={6}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{item.q}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq;
