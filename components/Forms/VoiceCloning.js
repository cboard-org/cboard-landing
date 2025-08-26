import React, {
 useState, useEffect, useMemo
} from 'react';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import CheckCircle from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import countries from 'world-countries';
import linkRouter from 'public/text/link';
import Link from '../Link';
import Checkbox from './Checkbox';
import ParallaxDeco from '../Parallax/Large';
import useStyles from './form-style';

function VoiceCloning() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');

  const isTablet = useMediaQuery(theme => theme.breakpoints.down('md'));

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
    county: '',
    contactPersonName: '',
    contactEmail: '',
    contactPhone: '',
    primaryDiagnosis: '',
    dateOfDiagnosis: '',
    hospital: '',
    certificate: null
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', value => value);
    ValidatorForm.addValidationRule('isFileRequired', () => values.certificate !== null && values.certificate !== undefined);
  });

  const [openNotif, setNotif] = useState(false);
  const [openErrorNotif, setErrorNotif] = useState(false);

  const [check, setCheck] = useState(false);

  // Prepare sorted countries list from world-countries library
  const sortedCountries = useMemo(() => countries
      .map(country => ({
        value: country.cca2.toLowerCase(), // Use ISO country code as value
        label: country.name.common
      }))
      .sort((a, b) => a.label.localeCompare(b.label)), []);

  const handleChange = name => event => {
    if (name === 'certificate') {
      const file = event.target.files[0];
      setValues({ ...values, [name]: file });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const sendApplicationEmail = async () => {
    // Create FormData to handle file uploads
    const formData = new FormData();
    formData.append('firstName', values.firstName);
    formData.append('lastName', values.lastName);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('dob', values.dob);
    formData.append('gender', values.gender);
    formData.append('address', values.address);
    formData.append('city', values.city);
    formData.append('county', values.county);
    formData.append('contactPersonName', values.contactPersonName);
    formData.append('contactEmail', values.contactEmail);
    formData.append('contactPhone', values.contactPhone);
    formData.append('primaryDiagnosis', values.primaryDiagnosis);
    formData.append('dateOfDiagnosis', values.dateOfDiagnosis);
    formData.append('hospital', values.hospital);
    formData.append('source', 'Voice Cloning Application');

    // Append file if it exists
    if (values.certificate) {
      formData.append('certificate', values.certificate);
    }

    try {
      const res = await fetch('/api/voice-cloning-email', {
        method: 'POST',
        // Remove Content-Type header to let the browser set it with boundary for FormData
        body: formData,
      });

      if (res.status === 200) {
        const data = await res.json();
        setNotif(true);
        console.log('Voice Cloning Application Sent - Application ID:', data.applicationId);
      } else {
        setErrorNotif(true);
        console.error('Voice Cloning Application Failed');
      }
    } catch (error) {
      setErrorNotif(true);
      console.error('Voice Cloning Application Failed:', error.message);
    }
  };

  const handleSubmit = () => {
    sendApplicationEmail();
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
              {t('voice_cloning_title')}
            </Typography>
            <Typography className={classes.desc}>
              {t('voice_cloning_subtitle')}
            </Typography>
            <div className={classes.form}>
              {openNotif && (
                <div className={classes.emailResponseMsg}>
                  <CheckCircle
                    className={classes.emailSuccessIcon}
                    fontSize="large"
                    color="green"
                  />
                  <Typography
                    variant="h4"
                    align="center"
                    className={classes.emailSuccess}
                    gutterBottom
                  >
                    {t('voice_cloning_success')}
                  </Typography>
                </div>
              )}
              {openErrorNotif && (
                <div className={classes.emailResponseMsg}>
                  <ErrorIcon
                    className={classes.emailErrorIcon}
                    fontSize="large"
                  />
                  <Typography
                    variant="h4"
                    align="center"
                    className={classes.emailError}
                    gutterBottom
                  >
                    {t('voice_cloning_error')}
                  </Typography>
                </div>
              )}

              {!openNotif && !openErrorNotif && (
                <ValidatorForm
                  onSubmit={handleSubmit}
                  onError={errors => console.log(errors)}
                >
                  {/* Personal Information Section */}
                  <Typography variant="h5" gutterBottom sx={{ mt: 2, mb: 2, fontWeight: 'bold' }}>
                    {t('voice_cloning_personal_info')}
                  </Typography>

                  <Grid2 container spacing={4}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={t('voice_cloning_first_name')}
                        onChange={handleChange('firstName')}
                        name="firstName"
                        value={values.firstName}
                        validators={['required']}
                        errorMessages={[t('field_required')]}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={t('voice_cloning_last_name')}
                        onChange={handleChange('lastName')}
                        name="lastName"
                        value={values.lastName}
                        validators={['required']}
                        errorMessages={[t('field_required')]}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={t('form_email')}
                        helperText={t('voice_cloning_email_helper')}
                        onChange={handleChange('email')}
                        name="email"
                        value={values.email}
                        validators={['required', 'isEmail']}
                        errorMessages={[t('field_required'), t('email_invalid')]}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={`${t('voice_cloning_phone')} *`}
                        onChange={handleChange('phone')}
                        name="phone"
                        value={values.phone}
                        validators={['required']}
                        errorMessages={[t('field_required')]}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={`${t('voice_cloning_dob')} *`}
                        placeholder="mm/dd/yyyy"
                        onChange={handleChange('dob')}
                        name="dob"
                        type="date"
                        value={values.dob}
                        validators={['required']}
                        errorMessages={[t('field_required')]}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={`${t('voice_cloning_gender')} *`}
                        onChange={handleChange('gender')}
                        name="gender"
                        value={values.gender}
                        validators={['required']}
                        errorMessages={[t('field_required')]}
                        select
                        SelectProps={{
                          native: false,
                        }}
                      >
                        <MenuItem value="">{t('please_choose_option')}</MenuItem>
                        <MenuItem value="male">{t('gender_male')}</MenuItem>
                        <MenuItem value="female">{t('gender_female')}</MenuItem>
                        <MenuItem value="non-binary">{t('gender_non_binary')}</MenuItem>
                        <MenuItem value="prefer-not-to-say">{t('gender_prefer_not_say')}</MenuItem>
                      </TextValidator>
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={`${t('voice_cloning_address')} *`}
                        onChange={handleChange('address')}
                        name="address"
                        value={values.address}
                        validators={['required']}
                        errorMessages={[t('field_required')]}
                        fullWidth
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={`${t('voice_cloning_city')} *`}
                        onChange={handleChange('city')}
                        name="city"
                        value={values.city}
                        validators={['required']}
                        errorMessages={[t('field_required')]}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={t('voice_cloning_country')}
                        onChange={handleChange('county')}
                        name="county"
                        value={values.county}
                        validators={['required']}
                        errorMessages={[t('field_required')]}
                        select
                        SelectProps={{
                          native: false,
                        }}
                        fullWidth
                      >
                        <MenuItem value="">{t('please_choose_option')}</MenuItem>
                        {sortedCountries.map(country => (
                          <MenuItem key={country.value} value={country.value}>
                            {country.label}
                          </MenuItem>
                        ))}
                        <MenuItem value="other">Other</MenuItem>
                      </TextValidator>
                    </Grid2>
                  </Grid2>

                  {/* Alternative Contact Information Section */}
                  <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
                    {t('voice_cloning_alt_contact')}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    {t('voice_cloning_alt_contact_desc')}
                  </Typography>

                  <Grid2 container spacing={4}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={t('voice_cloning_contact_name')}
                        onChange={handleChange('contactPersonName')}
                        name="contactPersonName"
                        value={values.contactPersonName}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={t('voice_cloning_contact_email')}
                        onChange={handleChange('contactEmail')}
                        name="contactEmail"
                        value={values.contactEmail}
                        validators={values.contactEmail ? ['isEmail'] : []}
                        errorMessages={[t('email_invalid')]}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={t('voice_cloning_contact_phone')}
                        onChange={handleChange('contactPhone')}
                        name="contactPhone"
                        value={values.contactPhone}
                      />
                    </Grid2>
                  </Grid2>

                  {/* Medical Information Section */}
                  <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
                    {t('voice_cloning_medical_info')}
                  </Typography>

                  <Grid2 container spacing={4}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={`${t('voice_cloning_primary_diagnosis')} *`}
                        onChange={handleChange('primaryDiagnosis')}
                        name="primaryDiagnosis"
                        value={values.primaryDiagnosis}
                        validators={['required']}
                        errorMessages={[t('field_required')]}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={`${t('voice_cloning_date_diagnosis')} *`}
                        onChange={handleChange('dateOfDiagnosis')}
                        name="dateOfDiagnosis"
                        type="date"
                        value={values.dateOfDiagnosis}
                        validators={['required']}
                        errorMessages={[t('field_required')]}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                      <TextValidator
                        variant="filled"
                        className={classes.input}
                        label={t('voice_cloning_hospital')}
                        onChange={handleChange('hospital')}
                        name="hospital"
                        value={values.hospital}
                        fullWidth
                      />
                    </Grid2>
                  </Grid2>

                  {/* Certificate Upload Section */}
                  <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
                    {t('voice_cloning_forms')}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    {t('voice_cloning_forms_desc')}
                  </Typography>

                  <Grid2 container spacing={4}>
                    <Grid2 size={{ xs: 12 }}>
                      <Button
                        variant="outlined"
                        component="label"
                        fullWidth
                        sx={{
                          p: 2,
                          textAlign: 'left',
                          justifyContent: 'flex-start',
                          height: '56px'
                        }}
                      >
                        {values.certificate ? values.certificate.name : `${t('voice_cloning_file_upload')} *`}
                        <input
                          type="file"
                          hidden
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={handleChange('certificate')}
                        />
                      </Button>
                      <TextValidator
                        value={values.certificate ? 'file-selected' : ''}
                        validators={['isFileRequired']}
                        errorMessages={[t('field_required')]}
                        style={{ display: 'none' }}
                      />
                    </Grid2>
                  </Grid2>

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
                      {t('voice_cloning_submit')}
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

export default VoiceCloning;
