import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import logo from '../images/logo-min.png';
import '../css/App.css';

const Hero = () => {
  return (
    <Box className="heroBox">
      <Grid container spacing={6} className="gridContainer">
        <Grid
          item
          className="gridItem gridItemText"
          xs={12}
          md={5}
          style={{ padding: '0 20px 0 0' }}
        >
          <Typography variant="h3" fontWeight={700} className="title">
            Lorem Ipsum
          </Typography>
          <Typography variant="h6" className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>
        <Grid
          item
          className="gridItem gridItemImage"
          xs={12}
          md={7}
          style={{ padding: '0 0 0 20px' }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              overflow: 'hidden',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
