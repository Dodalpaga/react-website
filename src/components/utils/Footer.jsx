import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import '../css/App.css';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="footerContainer">
      <Typography className="footerDate">
        {'Copyright © '}
        <Link color="inherit" to="https://github.com/Dodalpaga">
          Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};

export default Footer;
