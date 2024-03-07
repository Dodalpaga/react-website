import React, { useState } from 'react';
import '../css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useUserAuth } from '../../context/UserAuthContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="navbar" style={{ backgroundColor: '#0f172a' }}>
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
          <Button
            className="btn"
            onClick={() => {
              navigate('/home');
            }}
            variant="contained"
          >
            Home
          </Button>
        </li>
        <li>
          <Button
            className="btn"
            onClick={() => {
              navigate('/profile');
            }}
            variant="contained"
          >
            Profile
          </Button>
        </li>
        <li className="logOutButtonMenu">
          <Button
            variant="outlined"
            style={{ margin: '20px 0' }}
            onClick={handleLogout}
          >
            Log out
          </Button>
        </li>
      </ul>

      <div className="d-grid gap-2 logOutButton">
        <Button variant="contained" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </nav>
  );
}
