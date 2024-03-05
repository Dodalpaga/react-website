import React, { useState } from 'react';
import '../css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Header() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <nav className="transparent-background" style={{ position: 'fixed' }}>
      <Link to="/" className="title" style={{ color: 'black' }}>
        Website
      </Link>

      <div className="d-grid gap-2">
        <Button
          onClick={handleSignIn}
          sx={{ width: '100px', marginRight: '10px' }}
          style={{
            borderRadius: 35,
            backgroundColor: '#EFE4E0e7',
            color: '#0F172A',
          }}
          variant="contained"
        >
          Login
        </Button>
        <Button
          sx={{ width: '130px', marginRight: '10px' }}
          style={{
            borderRadius: 35,
            backgroundColor: '#EFE4E0e7',
            color: '#0F172A',
          }}
          variant="contained"
        >
          <a
            href="#contact-section"
            style={{ textDecoration: 'none', width: '200px', color: 'inherit' }}
          >
            Contact Us
          </a>
        </Button>
      </div>
    </nav>
  );
}
