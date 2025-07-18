import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'next-i18next';
import CssBaseline from '@mui/material/CssBaseline';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import brand from 'public/text/brand';
import MainContainer from 'components/MainContainer';
import BodyText from 'components/BodyText';
import PageNav from 'components/PageNav';
import Title from 'components/Title';
import HTMLHead from 'components/HTMLHead';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  },
  title: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6),
      marginBottom: sectionMargin(4),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(8),
    }
  }
}));

function HelpPage(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const { t } = useTranslation('common');

  return (
    <Fragment>
      <HTMLHead
        title={brand.cboard.name + ' | ' + t('title_help') + ' - ' + t('title_slogan')}
        locale={props.locale}
        page="help"
      />
      <CssBaseline />
      <MainContainer
        onToggleDark={onToggleDark}
        onToggleDir={onToggleDir}
        footerDeco
      >
        <Fragment>
          <div className={classes.title}>
            <Title align="center">
              {t('title_help')}
            </Title>
          </div>
          <main className={classes.containerWrap}>
            <section id="bodytext">
              <BodyText filePath="/locales/en/help/help.md" />
            </section>
          </main>
          {!isTablet && (
            <PageNav />
          )}
        </Fragment>
      </MainContainer>
    </Fragment>
  );
}

HelpPage.propTypes = {
  locale: PropTypes.string.isRequired,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default HelpPage;
