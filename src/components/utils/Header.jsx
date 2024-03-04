import React, { useState } from 'react';
import '../css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <nav style={{ position: 'fixed' }}>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="d-grid gap-2">
        <Button
          onClick={handleSignIn}
          sx={{ width: '100px', marginRight: '10px' }}
          style={{
            borderRadius: 35,
            backgroundColor: '#EFE4E0',
            color: '#0F172A',
          }}
          variant="contained"
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          onClick={handleSignUp}
          sx={{ width: '100px' }}
          style={{
            borderRadius: 35,
            backgroundColor: '#EFE4E0',
            color: '#0F172A',
          }}
        >
          Sign Up
        </Button>
      </div>
    </nav>
  );
}
