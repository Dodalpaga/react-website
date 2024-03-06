import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
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
import Footer from './utils/Footer';
import CountrySelector from './utils/CountrySelector';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SignUp() {
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

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <Container
      component="main"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm password"
            type="password"
            id="confirm-password"
            autoComplete="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="fullName"
            label="Full Name"
            type="text"
            id="fullName"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="userName"
            label="Username"
            type="text"
            id="userName"
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="normal"
            required
            fullWidth
            name="dateOfBirth"
            label="Birthday"
            type="date"
            id="dateOfBirth"
          />
          <CountrySelector
            margin="normal"
            required
            fullWidth
            name="country"
            onChange={(newValue) => {
              setCountry(newValue.label);
            }}
          />
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: '100%' }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
