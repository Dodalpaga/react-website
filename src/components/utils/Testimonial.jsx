import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { Avatar } from '@mui/material';
import '../css/App.css';

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: 'Karl Brighton',
      statement:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image_url:
        'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
      position: 'Software Engineer at Kadex',
    },
    {
      id: 2,
      name: 'Krishna Bells',
      statement:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image_url:
        'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
      position: 'Product Manager at Google',
    },
    {
      id: 3,
      name: 'Ben Spiff',
      statement:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image_url:
        'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
      position: 'Founder of Crypto',
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
      }}
    >
      <Grid container spacing={2}>
        {reviews.map((review) => (
          <Grid item sm={12} md={4} key={review.id}>
            <Card className="testimonialCard">
              <CardContent>
                <Typography className="testimonialStatement">
                  "{review.statement}"
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <Avatar
                    src={review.image_url}
                    size="large"
                    className="avatar"
                  />
                  <Box>
                    <Typography>{review.name}</Typography>
                    <Typography className="testimonialPosition">
                      {review.position}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonial;
