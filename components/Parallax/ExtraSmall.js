import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxLarge() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={cx(classes.innerParallax, classes.extraSmall)}>
          <Parallax
            translateY={[10, 30]}
            className="figure"
          >
            <svg className={classes.triangle}>
              <use xlinkHref="/images/mobile/triangle.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            translateY={[0, 20]}
            className="figure"
          >
            <svg className={classes.circle}>
              <use xlinkHref="/images/mobile/circle.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            translateY={[-20, 0]}
            className="figure"
          >
            <div className={classes.squareDot}>
              <svg className={classes.dotManySmall}>
                <use xlinkHref="/images/mobile/dot-many.svg#main" />
              </svg>
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
