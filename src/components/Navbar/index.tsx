import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import DarkModeButton from '../DarkModeButton';

const Navbar: React.FC = () => {
  return (
    <nav className='Navbar'>
      <DarkModeButton />
      <li><Link className="link" to="/">Home</Link></li>
      <li><Link className="link" to="Custos">Custos</Link></li>
    </nav>
  );
};

export default Navbar;
