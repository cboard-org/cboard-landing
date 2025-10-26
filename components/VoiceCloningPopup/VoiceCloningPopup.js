import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import useStyles from './voice-cloning-popup-style';

const VoiceCloningPopup = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if running in browser
    if (typeof window === 'undefined') return undefined;

    // Only show popup on index pages (root or localized index)
    const currentPath = router.asPath;
    const isIndexPage = currentPath === '/' || currentPath.match(/^\/[a-z]{2}(\/?)$/);

    if (!isIndexPage) return undefined;

    // Check if user has already dismissed this popup
    const dismissed = localStorage.getItem('voiceCloningPopupDismissed');
    const lastShown = localStorage.getItem('voiceCloningPopupLastShown');
    const now = Date.now();
    const oneDayInMs = 24 * 60 * 60 * 1000;

    // Show popup if:
    // 1. Never dismissed OR
    // 2. Last shown more than 24 hours ago
    if (!dismissed || (lastShown && (now - parseInt(lastShown, 10)) > oneDayInMs)) {
      // Delay showing popup by 3 seconds after page load
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem('voiceCloningPopupLastShown', now.toString());
      }, 3000);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, [router.asPath]);

  const handleApply = () => {
    setOpen(false);
    // Navigate to eleven-labs page
    router.push('/eleven-labs');
  };

  const handleDismiss = () => {
    setOpen(false);
    // Mark as dismissed for 7 days
    if (typeof window !== 'undefined') {
      const dismissedUntil = Date.now() + (7 * 24 * 60 * 60 * 1000);
      localStorage.setItem('voiceCloningPopupDismissed', dismissedUntil.toString());
    }
  };

  const handleClose = () => {
    setOpen(false);
    // Just close without marking as permanently dismissed
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      className={classes.dialog}
      PaperProps={{
        className: classes.dialogPaper,
      }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <Box className={classes.titleContainer}>
          <Typography variant="h5" component="h2" className={classes.title}>
            {t('voice_cloning_popup_title')}
          </Typography>
          <IconButton
            onClick={handleClose}
            className={classes.closeButton}
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent className={classes.dialogContent}>
        <Typography variant="body1" className={classes.description}>
          {t('voice_cloning_popup_description')}
        </Typography>

        <Box className={classes.logoContainer}>
          <img
            src="/images/cboard-logo.svg"
            alt="Cboard Logo"
            className={classes.logo}
          />
          <Typography variant="h6" className={classes.plusSymbol}>
            +
          </Typography>
          <img
            src="/images/logos/elevenlabs.png"
            alt="ElevenLabs Logo"
            className={classes.logo}
          />
        </Box>
      </DialogContent>

      <DialogActions className={classes.dialogActions}>
        <Button
          onClick={handleDismiss}
          className={classes.dismissButton}
          variant="text"
        >
          {t('voice_cloning_popup_dismiss')}
        </Button>
        <Button
          onClick={handleApply}
          className={classes.applyButton}
          variant="contained"
          color="primary"
        >
          {t('voice_cloning_popup_apply')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default VoiceCloningPopup;
