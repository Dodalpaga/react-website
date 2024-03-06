import React, { useState } from 'react';
import '../css/Header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setMenuOpen(false);
    navigate('/signin');
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

      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <Button className="btn" onClick={handleSignIn} variant="contained">
            Login
          </Button>
        </li>
        <li>
          <Button
            className="btn"
            variant="contained"
            onClick={() => setMenuOpen(false)}
          >
            <a
              href="#contact-section"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Contact Us
            </a>
          </Button>
        </li>
      </ul>

      {/* <div className="d-grid gap-2">
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
      </div> */}
    </nav>
  );
}
