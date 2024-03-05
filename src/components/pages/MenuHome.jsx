import React from 'react';
import { CssBaseline } from '@mui/material';
import NavBar from '../utils/NavBar';
import '../css/App.css';

export const Home = () => {
  return (
    <div className="fixedBackgroundLight">
      <CssBaseline />
      <NavBar />
      <h1>Home</h1>
    </div>
  );
};
