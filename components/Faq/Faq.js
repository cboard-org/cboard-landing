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

  const faqData = [
    {
      q: t('faqs.faq1'),
      a: t('faqs.answer1')
    },
    {
      q: t('faqs.faq2'),
      a: t('faqs.answer2')
    },
    {
      q: t('faqs.faq3'),
      a: t('faqs.answer3')
    },
    {
      q: t('faqs.faq4'),
      a: t('faqs.answer4')
    },
    {
      q: t('faqs.faq5'),
      a: t('faqs.answer5')
    },
  ];
  
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
              {t('faq_subtitle')}
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
