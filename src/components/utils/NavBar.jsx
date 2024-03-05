import React, { useState } from 'react';
import '../css/Navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
    <nav>
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
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>

      <div className="d-grid gap-2">
        <Button variant="contained" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </nav>
  );
}
