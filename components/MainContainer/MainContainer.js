import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "tss-react/mui";
import Header from "../Header";
import Footer from "../Footer/Footer";
import FooterWithDeco from "../Footer/FooterWithDeco";
import { useRouter } from "next/router";
const sectionMargin = (margin) => margin * 20;
const useStyles = makeStyles({ uniqId: "main_container" })((theme) => ({
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    background: theme.palette.background.paper,
  },
  spaceTop: {
    paddingTop: theme.spacing(20),
  },
}));

function MainContainer(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir, children, footerDeco } = props;
  const router = useRouter();
  const isHomePage = router.pathname === "/[locale]";
  const invert = !isHomePage;

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert={invert}
        />
        {children}
        <div>
          {footerDeco ? (
            <FooterWithDeco toggleDir={onToggleDir} />
          ) : (
            <section id="footer">
              <Footer invert toggleDir={onToggleDir} />
            </section>
          )}
        </div>
      </div>
    </Fragment>
  );
}

MainContainer.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  invert: PropTypes.bool,
  footerDeco: PropTypes.bool,
};

MainContainer.defaultProps = {
  invert: false,
  footerCounter: false,
};

export default MainContainer;
