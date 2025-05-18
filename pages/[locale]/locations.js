import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'next-i18next';
import CssBaseline from '@mui/material/CssBaseline';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import brand from 'public/text/brand';
import MainContainer from 'components/MainContainer';
import PageNav from 'components/PageNav';
import Notification from 'components/Notification';
import Locations from 'components/Locations';
import HTMLHead from 'components/HTMLHead';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(6),
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(10),
    }
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10),
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(2),
    }
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(2),
    }
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function LocationsPage(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir, locale } = props;
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const { t } = useTranslation('common');

  return (
    <Fragment>
      <HTMLHead
        title={brand.cboard.name + ' | ' + t("title_locations") + ' - ' + t("title_slogan")}
        locale={locale}
        page='locations'
      />
      <CssBaseline />
      <MainContainer
        onToggleDark={onToggleDark}
        onToggleDir={onToggleDir}
        footerDeco
      >
        <Fragment>
          <main className={classes.containerWrap}>
            <section id="locations">
              <Locations />
            </section>
          </main>
          {!isTablet && (
            <Fragment>
              <PageNav />
              <Notification />
            </Fragment>
          )}
        </Fragment>
      </MainContainer>
    </Fragment>
  );
}

LocationsPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default LocationsPage;
