import React from 'react';
import { CssBaseline } from '@mui/material';
import Profile from '../utils/Profile';
import NavBar from '../utils/NavBar';
import '../css/App.css';

export function MenuProfile() {
  return (
    <div className="fixedBackgroundLight">
      <CssBaseline />
      <NavBar />
      <Profile />
    </div>
  );
}
