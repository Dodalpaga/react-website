// SignUp.jsx

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import CountrySelector from './utils/CountrySelector';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SignUp() {
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('error');
  const [alertMessage, setAlertMessage] = useState('');
  const [country, setCountry] = useState('Thaïland');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      if (data.get('password') != data.get('confirmPassword')) {
        setAlertSeverity('error');
        setAlertMessage("Passwords don't match");
        setAlertOpen(true);
      } else {
        await signUp(
          data.get('email'),
          data.get('password'),
          data.get('fullName'),
          data.get('userName'),
          data.get('dateOfBirth'),
          country
        );
        navigate('/');
      }
    } catch (err) {
      setAlertSeverity('error');
      setAlertMessage(err.message);
      setAlertOpen(true);
    }
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={{ width: '100%' }}
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  sx={{ width: '100%' }}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  sx={{ width: '100%' }}
                  name="confirmPassword"
                  label="Confirm password"
                  type="password"
                  id="confirm-password"
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  sx={{ width: '100%' }}
                  name="fullName"
                  label="Full Name"
                  type="text"
                  id="fullName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  sx={{ width: '100%' }}
                  name="userName"
                  label="Username"
                  type="text"
                  id="userName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  required
                  sx={{ width: '100%' }}
                  name="dateOfBirth"
                  label="Birthday"
                  type="date"
                  id="dateOfBirth"
                />
              </Grid>
              <Grid item xs={12}>
                <CountrySelector
                  required
                  sx={{ width: '100%' }}
                  name="country"
                  onChange={(newValue) => {
                    console.log(newValue.label);
                    setCountry(newValue.label);
                  }} // You need to define this state updater function
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, width: '100%' }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <Alert onClose={handleAlertClose} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default SignUp;
