import React from 'react';
import { CssBaseline } from '@mui/material';
import Container from '@mui/joy/Container';
import NavBar from '../utils/NavBar';
import '../css/App.css';

export function MenuTemplate() {
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
          height: '100%',
          flexDirection: 'column',
        }}
      >
        Template
      </Container>
    </div>
  );
}
