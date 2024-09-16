import React, { useState, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import useStyles from './timeline-style';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import GithubIcon from '@mui/icons-material/GitHub';
import PaidIcon from '@mui/icons-material/Paid';
import PublicIcon from '@mui/icons-material/Public';
import EuroIcon from '@mui/icons-material/Euro';
import GroupsIcon from '@mui/icons-material/Groups2';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AppsIcon from '@mui/icons-material/Apps';

function CboardTimeline() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  const timelineContent = [
    {
      title: t('mobile-landing.timeline.title1'),
      year: '2016',
      text: t('mobile-landing.timeline.text1'),
      icon: <GithubIcon />,
    },
    {
      title: t('mobile-landing.timeline.title2'),
      year: '2017',
      text: t('mobile-landing.timeline.text2'),
      icon: <PaidIcon />,
    },
    {
      title: t('mobile-landing.timeline.title3'),
      year: '2018',
      text: t('mobile-landing.timeline.text3'),
      icon: <PublicIcon />,
    },
    {
      title: t('mobile-landing.timeline.title4'),
      year: '2019',
      text: t('mobile-landing.timeline.text4'),
      icon: <EuroIcon />,
    },
    {
      title: t('mobile-landing.timeline.title5'),
      year: '2021',
      text: t('mobile-landing.timeline.text5'),
      icon: <GroupsIcon />,
    },
    {
      title: t('mobile-landing.timeline.title6'),
      year: '2022',
      text: t('mobile-landing.timeline.text6'),
      icon: <PaidIcon />,
    },
    {
      title: t('mobile-landing.timeline.title7'),
      year: '2023',
      text: t('mobile-landing.timeline.text7'),
      icon: <AutoAwesomeIcon />,
    },
    {
      title: t('mobile-landing.timeline.title8'),
      year: '2024',
      text: t('mobile-landing.timeline.text8'),
      icon: <AppsIcon />,
    },
  ];

  return (
    <div className={classes.root}>
      <Timeline position="alternate">
        {timelineContent.map((item, index) => (

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {item.year}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                {item.icon}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {item.title}
              </Typography>
              <Typography>
                {item.text}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default CboardTimeline;
