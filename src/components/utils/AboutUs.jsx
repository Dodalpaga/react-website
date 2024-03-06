import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import bs3 from '../images/bs3.jpg';
import '../css/App.css';

const AboutUs = () => {
  return (
    <Box className="aboutBox">
      <Grid container spacing={6} className="gridContainer">
        <Grid
          item
          xs={12}
          md={5}
          className="gridItem"
          style={{ padding: '0 20px 0 0' }}
        >
          <img
            src={bs3}
            alt="bs3"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              overflow: 'hidden',
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          className="gridItem"
          style={{ padding: '0 0 0 20px' }}
        >
          <Typography variant="h3" fontWeight={700} className="title">
            We build, We revive
          </Typography>
          <Typography className="aboutUsSubtitle">
            Your business needs to be in safe hands at all times. We ensure you
            never run out of customers and not run at loss. We are trusted by
            over 500+ companies to deliver quality marketing campaigns using
            Digital marketing & Offline marketing channels.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            <a
              href="#contact-section"
              style={{
                backgroundColor: 'transparent',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              CONTACT US
            </a>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
