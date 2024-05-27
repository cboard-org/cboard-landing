import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxLarge() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={cx(classes.innerParallax, classes.large)}>
          <Parallax
            translateY={[50, 50]}
            className="figure"
          >
            <svg className={classes.triangle}>
              <use xlinkHref="/images/mobile/triangle.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            translateY={[60, 60]}
            className="figure"
          >
            <svg className={classes.circle}>
              <use xlinkHref="/images/mobile/circle.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            translateY={[20, 20]}
            className="figure"
          >
            <div className={classes.squareDot}>
              <svg className={classes.square}>
                <use xlinkHref="/images/mobile/square.svg#main" />
              </svg>
              <svg className={classes.dot}>
                <use xlinkHref="/images/mobile/dot.svg#main" />
              </svg>
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
