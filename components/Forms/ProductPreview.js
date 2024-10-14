import React, { useState, useEffect, Fragment } from 'react';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import CheckCircle from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import logo from 'public/images/cboard-logo.svg';
import linkRouter from 'public/text/link';
import Link from '../Link';
import Checkbox from './Checkbox';
import ParallaxDeco from '../Parallax/Large';
import useStyles from './form-style';
import link from 'public/text/link';

function ProductPreview() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');

  const isTablet = useMediaQuery(theme => theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', value => value);
  });

  const [openNotif, setNotif] = useState(false);
  const [openErrorNotif, setErrorNotif] = useState(false);

  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    sendCodeEmail();
  };

  const handleClose = () => {
    setNotif(false);
  };

  const sendCodeEmail = async () => {
    const body = {
      name: values.name,
      email: values.email,
      link: 'https://cbuilder.cboard.io',
    };
    try {
      // Get available codes from the database
      const res = await fetch('/api/sqlite', {
        method: 'GET'
      });

      if (res.status === 200) {
        const data = await res.json();
        if (data.length > 0) {
          // check if email is already in the database
          for (let i = 0; i < data.length; i++) {
            if (data[i].email === values.email) {
              console.error('Email already exists');
              setErrorNotif(true);
              return;
            }
          }
          // get the first available code
          for (let i = 0; i < data.length; i++) {
            if (data[i].email === '') {
              body.id = data[i].id;
              body.code = data[i].code;
              body.source = data[i].source;
            }
          }
        } else {
          console.error('No available codes');
          return;
        }
      } else {
        console.error('Failed to get codes');
        return;
      }
    } catch (error) {
      console.error('Failed to get codes ' + error.message);
      return;
    }
    try {
      const res = await fetch('/api/sqlite', {
        method: 'PATCH',
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        console.log('Database Updated successfully');
      } else {
        setNotif(false);
        console.error('Database Update Failed');
        return;
      }
    } catch (error) {
      setNotif(false);
      console.error('Database Update Failed ' + error.message);
      return;
    }

    try {
      const res = await fetch('/api/email-code', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        setNotif(true);
        console.log('Email Message Sent');
      } else {
        setNotif(false);
        console.error('Email Message Failed');
      }
    } catch (error) {
      setNotif(false);
      console.error('Email Message Failed ' + error.message);
    }
  };

  return (
    <div className={classes.pageWrap}>
      {!isTablet && (
        <div className={classes.background}>
          <div className={classes.gradient}>
            <div className={classes.decoWave} />
            <div className={classes.decoLine} />
            <div className={classes.decoInner}>
              <img src="/images/mobile/animation-banner.png" alt="decoration" />
            </div>
          </div>
        </div>
      )}
      <div className={classes.parallax}>
        <ParallaxDeco />
      </div>

      {!isDesktop && (
        <div className={cx(classes.logo, classes.logoHeader)}>
          <Link href={linkRouter.mobile.home}>
            <img src={logo} alt="logo" />
            <Typography component="span">
              {brand.mobile.projectName}
            </Typography>
          </Link>
        </div>
      )}
      <Container maxWidth="md" className={classes.innerWrap}>
        <IconButton component={Link} href={linkRouter.mobile.home} className={classes.backtohome} size="large">
          <span>
            <i className="ion-ios-home-outline" />
            <i className="ion-ios-arrow-round-back" />
          </span>
        </IconButton>
        <Paper className={cx(classes.formBox, 'fragment-fadeUp')}>
          <div className={classes.fullFromWrap}>
            <Typography
              variant="h3"
              align="center"
              className={classes.title}
              gutterBottom
            >
              {t('product_preview_title')}
            </Typography>
            <Typography className={classes.desc}>
              {t('product_preview_subtitle')}
            </Typography>
            <div className={classes.form}>
              {openNotif && (
                <Fragment>
                  <div className={classes.emailResponseMsg}>
                    <CheckCircle
                      className={classes.emailSuccessIcon}
                      fontSize='large'
                      color='green' />
                    <Typography
                      variant="h4"
                      align="center"
                      className={classes.emailSuccess}
                      gutterBottom
                    >
                      {t('product_preview_email_success')}
                    </Typography>
                  </div>
                </Fragment>
              )}
              {openErrorNotif && (
                <Fragment>
                  <div className={classes.emailResponseMsg}>
                    <ErrorIcon
                      className={classes.emailErrorIcon}
                      fontSize='large'
                    />
                    <Typography
                      variant="h4"
                      align="center"
                      className={classes.emailError}
                      gutterBottom
                    >
                      {t('product_preview_email_error')}
                    </Typography>
                  </div>
                </Fragment>
              )}

              {!openNotif && !openErrorNotif && (
                <ValidatorForm
                  onSubmit={handleSubmit}
                  onError={errors => console.log(errors)}
                >
                  <Grid container spacing={4}>
                    <Grid item md={6} xs={12}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={t('form_name')}
                        onChange={handleChange('name')}
                        name="Name"
                        value={values.name}
                        validators={['required']}
                        errorMessages={['This field is required']}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={t('form_email')}
                        onChange={handleChange('email')}
                        name="Email"
                        value={values.email}
                        validators={['required', 'isEmail']}
                        errorMessages={['This field is required', 'email is not valid']}
                      />
                    </Grid>
                  </Grid>
                  <div className={classes.btnArea}>
                    <FormControlLabel
                      control={(
                        <Checkbox
                          validators={['isTruthy']}
                          errorMessages="This field is required"
                          checked={check}
                          value={check}
                          onChange={(e) => handleCheck(e)}
                          color="primary"
                        />
                      )}
                      label={(
                        <span>
                          {t('form_terms')}
                          <br />
                          <a href="#">
                            {t('form_privacy')}
                          </a>
                        </span>
                      )}
                    />
                    <Button variant="contained" type="submit" color="secondary" size="large">
                      {t('code_send')}
                      <SendIcon className={classes.rightIcon} />
                    </Button>
                  </div>
                </ValidatorForm>
              )}
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default ProductPreview;
