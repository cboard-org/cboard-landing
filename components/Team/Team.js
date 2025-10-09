import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-slick';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import Title from '../Title';
import useStyles from './team-style';

function Team() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  const sliderText = useRef(null);
  const sliderAvatar = useRef(null);
  const [slider, setSlider] = useState({
    nav1: null,
    nav2: null
  });

  useEffect(() => {
    setSlider({
      nav1: sliderText.current,
      nav2: sliderAvatar.current
    });
  }, []);

  const settingsText = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
  };

  const settingsAvatar = {
    dots: false,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    centerPadding: '2px',
    centerMode: true,
    autoplaySpeed: 10000,
    slidesToShow: 5,
    pauseOnHover: false,
    arrows: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  };

  const testiContent = [
    {
      text: t('team.text1'),
      avatar: imgAPI.team[0],
      name: 'Martín Bedouret',
      title: t('team.title1'),
    },
    {
      text: t('team.text2'),
      avatar: imgAPI.team[1],
      name: 'Katrina Cohen Cosentino',
      title: t('team.title2'),
    },
    {
      text: t('team.text3'),
      avatar: imgAPI.team[2],
      name: 'Tomi Van Morlegan',
      title: t('team.title3'),
    },
    {
      text: t('team.text4'),
      avatar: imgAPI.team[3],
      name: 'Rodrigo Sánchez',
      title: t('team.title4'),
    },
    {
      text: t('team.text5'),
      avatar: imgAPI.team[4],
      name: 'Héctor Costa',
      title: t('team.title5'),
    },
    {
      text: t('team.text6'),
      avatar: imgAPI.team[8],
      name: 'Agus Las Peñas',
      title: t('team.title6'),
    },
    {
      text: t('team.text7'),
      avatar: imgAPI.team[6],
      name: 'Shay Cojocaru',
      title: t('team.title7'),
    },
    {
      text: t('team.text8'),
      avatar: imgAPI.team[7],
      name: 'Cosmo',
      title: t('team.title8'),
    },
  ];

  return (
    <div className={classes.root}>
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUpShort"
        offset={-50}
        delay={300}
        duration={0.5}
      >
        <div>
          <Title align="center">
            {t('team_title')}
          </Title>
        </div>
      </ScrollAnimation>
      <div className={classes.carouselWrap}>
        <ScrollAnimation
          animateOnce
          animateIn="fadeInUpShort"
          offset={-150}
          delay={400}
          duration={0.5}
        >
          <div>
            <div className={classes.carouselAvatar}>
              <Carousel ref={sliderAvatar} asNavFor={slider.nav1} {...settingsAvatar}>
                {testiContent.map((item, index) => (
                  <div className={classes.item} key={index.toString()}>
                    <Avatar alt={item.name} src={item.avatar} className={classes.avatar} />
                  </div>
                ))}
              </Carousel>
            </div>
            <Container maxWidth="sm">
              <div className={classes.carouselText}>
                <Carousel ref={sliderText} asNavFor={slider.nav2} {...settingsText}>
                  {testiContent.map((item, index) => (
                    <div className={classes.item} key={index.toString()}>
                      <Typography className={classes.name}>
                        <strong>{item.name}</strong>
                      &nbsp;-&nbsp;
                        {item.title}
                      </Typography>
                      <Typography className={classes.content}>
                        {item.text}
                      </Typography>
                    </div>
                  ))}
                </Carousel>
              </div>
            </Container>
          </div>
        </ScrollAnimation>
      </div>
      <div className={classes.decoBgBottom} />
    </div>
  );
}

export default Team;
