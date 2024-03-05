import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import logo from '../images/logo-min.png';
import '../css/App.css';

const Hero = () => {
  return (
    <Box className="heroBox">
      <Grid container spacing={6} className="gridContainer">
        <Grid item xs={12} md={5}>
          <Typography variant="h3" fontWeight={700} className="title">
            Let's scale your business
          </Typography>
          <Typography variant="h6" className="subtitle">
            Hire professionals who will help your business make 10X your
            previous income. With over 5years experience in Marketing & Business
            strategy, we are your best client.
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <img src={logo} alt="bs3" className="largeImage" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
