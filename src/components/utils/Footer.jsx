import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import '../css/Landing.css';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="footerContainer">
      <Typography className="footerText">
        Copyright{' '}
        <Link
          target="_blank"
          href="https://github.com/Dodalpaga"
          underline="none"
        >
          Dodalpaga
        </Link>
      </Typography>
      <Typography className="footerDate">
        {'Copyright © '}
        <Link color="inherit" to="/">
          Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};

export default Footer;
