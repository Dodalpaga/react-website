import React from 'react';
import { CssBaseline } from '@mui/material';
import Container from '@mui/joy/Container';
import NavBar from '../utils/NavBar';
import '../css/App.css';

export function MenuHome() {
  return (
    <div
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
      <NavBar />
      <Container
        component="main"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        }}
      >
        Home
      </Container>
    </div>
  );
}
