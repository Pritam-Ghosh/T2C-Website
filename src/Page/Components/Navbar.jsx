import React from 'react';
import logo from '../../assets/t2c-assest/logo.png'; 
import { Menu } from 'lucide-react';


function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" />
      <ul className='navbar-list'>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Blogs</li>
        <li>News</li>
        <li>Contact</li>
      </ul>
      <button className='nav-Button'>Get Started</button>
      <Menu className='manu' />
    </nav>
  );
}

export default Navbar;
