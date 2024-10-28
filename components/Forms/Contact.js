import React, { useState, useEffect, Fragment } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircle from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import logo from 'public/images/cboard-logo.svg';
import linkRouter from 'public/text/link';
import Link from '../Link';
import Checkbox from './Checkbox';
import ParallaxDeco from '../Parallax/Large';
import useStyles from './form-style';

function Contact() {
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
  const [loading, setLoading] = useState(false);
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    sendEmail();
  };

  const sendEmail = async () => {
    const body = {
      message: values.message,
      name: values.name,
      email: values.email,
      phone: values.phone,
      company: values.company
    };
    setLoading(true);
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        setNotif(true);
        console.log('Email Message Sent');
      } else {
        setNotif(false);
        setErrorNotif(true);
        console.error('Email Message Failed');
      }
    } catch (error) {
      setNotif(false);
      setErrorNotif(true);
      console.error('Email Message Failed ' + error.message);
    }
    setLoading(false);
    return;
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
              {t('contact_title')}
            </Typography>
            <Typography className={classes.desc}>
              {t('contact_subtitle')}
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
                      {t('email_success')}
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
                      {t('email_error')}
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
                    <Grid item md={6} xs={12}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={t('form_phone')}
                        onChange={handleChange('phone')}
                        name="Phone"
                        value={values.phone}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={t('form_company')}
                        onChange={handleChange('company')}
                        name="Company"
                        value={values.company}
                      />
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <TextValidator
                        variant="filled"
                        multiline
                        rows="6"
                        className={classes.input}
                        label={t('form_message')}
                        onChange={handleChange('message')}
                        name="Message"
                        value={values.message}
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
                    <LoadingButton
                      endIcon={<SendIcon className={classes.rightIcon} />}
                      loading={loading}
                      loadingPosition="end"
                      variant="contained"
                      type="submit"
                      color="secondary"
                      size="large"
                    >
                      {t('form_send')}
                    </LoadingButton>
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

export default Contact;
