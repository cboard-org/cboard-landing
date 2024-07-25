import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-slick';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import Title from '../Title';
import useStyles from './testi-style';

function Testimonials() {
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
    slidesToShow: 7,
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
      text: t('mobile-landing.testimonials.text1'),
      avatar: imgAPI.avatar[0],
      name: 'Lilyana Lee',
      title: t('mobile-landing.testimonials.title1'),
    },
    {
      text: t('mobile-landing.testimonials.text2'),
      avatar: imgAPI.avatar[1],
      name: 'Sofia',
      title: t('mobile-landing.testimonials.title2'),
    },
    {
      text: t('mobile-landing.testimonials.text3'),
      avatar: imgAPI.avatar[2],
      name: 'Holly White',
      title: t('mobile-landing.testimonials.title3'),
    },
    {
      text: t('mobile-landing.testimonials.text4'),
      avatar: imgAPI.avatar[3],
      name: 'Neila Machado',
      title: t('mobile-landing.testimonials.title4'),
    },
    {
      text: t('mobile-landing.testimonials.text5'),
      avatar: imgAPI.avatar[4],
      name: 'Mary Bagalay',
      title: t('mobile-landing.testimonials.title5'),
    },
    {
      text: t('mobile-landing.testimonials.text6'),
      avatar: imgAPI.avatar[5],
      name: 'Brooke Willingham',
      title: t('mobile-landing.testimonials.title6'),
    },
    {
      text: t('mobile-landing.testimonials.text7'),
      avatar: imgAPI.avatar[6],
      name: 'Nancy Ramirez',
      title: t('mobile-landing.testimonials.title7'),
    },
    {
      text: t('mobile-landing.testimonials.text8'),
      avatar: imgAPI.avatar[7],
      name: 'Guccigang Taylor Justin',
      title: t('mobile-landing.testimonials.title8'),
    },
    {
      text: t('mobile-landing.testimonials.text9'),
      avatar: imgAPI.avatar[8],
      name: 'Starling-Ophelia Rose',
      title: t('mobile-landing.testimonials.title9'),
    }
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
            {t('mobile-landing.testimonial_title')}
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
            <Container maxWidth="sm">
              <div className={classes.carouselText}>
                <Carousel ref={sliderText} asNavFor={slider.nav2} {...settingsText}>
                  {testiContent.map((item, index) => (
                    <div className={classes.item} key={index.toString()}>
                      <Typography className={classes.content}>
                        {item.text}
                      </Typography>
                      <Typography className={classes.name}>
                        <strong>{item.name}</strong>
                        &nbsp;-&nbsp;
                        {item.title}
                      </Typography>
                    </div>
                  ))}
                </Carousel>
              </div>
            </Container>
            <div className={classes.carouselAvatar}>
              <Carousel ref={sliderAvatar} asNavFor={slider.nav1} {...settingsAvatar}>
                {testiContent.map((item, index) => (
                  <div className={classes.item} key={index.toString()}>
                    <Avatar alt={item.name} src={item.avatar} className={classes.avatar} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className={classes.decoBgBottom} />
    </div>
  );
}

export default Testimonials;
