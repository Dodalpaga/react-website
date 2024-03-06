import React, { useState } from 'react';
import '../css/Header.css';
import { Link, useNavigate } from 'react-router-dom';
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
                backgroundColor: 'transparent',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Contact Us
            </a>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
