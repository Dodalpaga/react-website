import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import '../css/App.css';

const Newsletter = () => {
  const [emailNewsletter, setEmailNewsletter] = useState('');

  const submitFormNewsletter = (e) => {
    e.preventDefault();
    console.log({ emailNewsletter });
  };

  return (
    <Box id="newsletter-section" className="newsletter">
      <Typography variant="h3" fontWeight={700} className="title">
        Want to hear from us ?
      </Typography>
      <Typography variant="h6" className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
      <Box className="form" component="form" noValidate autoComplete="off">
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          className="inputField"
          value={emailNewsletter}
          onChange={(e) => setEmailNewsletter(e.target.value)}
        />

        <Button
          variant="contained"
          type="submit"
          color="primary"
          sx={{ fontSize: '16px' }}
          onClick={submitFormNewsletter}
        >
          Subscribe to newsletter
        </Button>
      </Box>
    </Box>
  );
};

export default Newsletter;
