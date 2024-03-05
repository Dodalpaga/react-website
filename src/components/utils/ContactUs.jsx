import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  Grid,
} from '@mui/material';
import '../css/Landing.css';
import bs3 from '../images/bs3.jpg';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [emailNewsletter, setEmailNewsletter] = useState('');
  const [firstName, setFirstName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ email, firstName, subject, message });
  };

  const submitFormNewsletter = (e) => {
    e.preventDefault();
    console.log({ emailNewsletter });
  };

  return (
    <section id="contact-section" className="contact">
      <Box className="contactContainer">
        <Typography
          variant="h3"
          fontWeight={700}
          className="title"
          style={{ textAlign: 'center' }}
        >
          Contact Us
        </Typography>
        <Box className="form" component="form" noValidate autoComplete="off">
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            className="inputField"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className="inputField"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Subject"
            variant="outlined"
            fullWidth
            className="inputField"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <TextareaAutosize
            aria-label="minimum height"
            minRows={6}
            placeholder="Enter a message"
            className="textArea"
            spellCheck
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button
            variant="contained"
            type="submit"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Box className="newsletterBox">
        <Typography variant="h3" fontWeight={700} className="title">
          Want to hear from us ?
        </Typography>
        <Typography variant="h6" className="subtitle">
          Hire professionals who will help your business make 10X your previous
          income. With over 5years experience in Marketing & Business strategy,
          we are your best client.
        </Typography>
        <Box className="form" component="form" noValidate autoComplete="off">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className="inputField"
            value={email}
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
    </section>
  );
};

export default ContactUs;
