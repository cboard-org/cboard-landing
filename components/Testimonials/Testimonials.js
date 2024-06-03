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

const testiContent = [
  {
    text: `I love that your app has a free dark mode. Others I have tried using for my autistic partner said we would have to pay to have dark mode, and they are photo-sensitive. Thank you for not exploiting the disabled!.`,
    avatar: imgAPI.avatar[0],
    name: 'Lilyana Lee',
    title: 'Partner of autistic person',
  },
  {
    text: `I think this app is great! I tried to find other AAC apps, and there was not many like this one. In most AAC apps, they do not support typing. Also, they don't have an option to use children's voices. Good job for making a unique AAC app that works perfectly, at least for me!.`,
    avatar: imgAPI.avatar[1],
    name: 'Sofia',
    title: 'Mother of austistic child',
  },
  {
    text: `Great for adults with HFA who sometimes have non-verbal episodes, lose their voice briefly because of allergies or a sore throat, and to explain important things in pictures. I also love that you can type alongside the pictures. This app is fun and very easy to use, and is a real lifesaver in a medical situation.`,
    avatar: imgAPI.avatar[2],
    name: 'Holly White',
    title: '',
  },
  {
    text: `It makes several necessary arrangements to be able to adapt to the model you want. I really liked the smart touch and settings. It's still free, with voice and constantly updated.`,
    avatar: imgAPI.avatar[3],
    name: 'Neila Machado',
    title: 'Dentist & Dental Office',
  },
  {
    text: `Very useful for a free aac app. The icon library is extensive and its very easy to edit! It can be a bit slow especially when editing but its upside is the typing option which Im looking for in other applications like Symbotalk or Letmetalk.`,
    avatar: imgAPI.avatar[4],
    name: 'Mary Bagalay',
    title: 'Speech Language Pathologist',
  },
  {
    text: `DOWNLOAD IT NOW!!! I have gone through so many app trying to find the right one for my disabled chiLd and this is IT!!!!! I can lock the screen, upload my own images, and even use my own voice?!? YES YES YES!!`,
    avatar: imgAPI.avatar[5],
    name: 'Brooke Willingham',
    title: 'Senior Graphic Designer',
  },
  {
    text: `Fantastic app. It has every feature you would need for a robust aac system with voicing, customization, and a wide selection of symbols.`,
    avatar: imgAPI.avatar[6],
    name: 'Nancy Ramirez',
    title: 'Speech Language Pathologist',
  },
  {
    text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    avatar: imgAPI.avatar[9],
    name: 'John Doe',
    title: 'Chief Digital Officer',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[8],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
  },
];

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
