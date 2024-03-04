import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import '../css/Landing.css';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Box sx={{ flexGrow: 1 }} className="footerContainer">
      <Typography className="footerText">
        Provided by{' '}
        <Link href="https://appseed.us" target="_blank" underline="none">
          AppSeed
        </Link>
      </Typography>
      <Typography className="footerDate">
        Open-Source Sample - Buit with MUI
      </Typography>
    </Box>
  );
};

export default Footer;
