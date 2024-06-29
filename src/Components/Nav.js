import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.svg';
import menuOff from '../assets/images/menuoff.png';
import menuOn from '../assets/images/menuon.png';
import './Nav.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='nav'>
      <img src={logo} alt='logo' className='nav-logo' />
      <img
        src={menuOpen ? menuOn : menuOff}
        alt='menu'
        className='nav-hamburger'
        onClick={toggleMenu}
      />
      <ul className={`nav-ul ${menuOpen ? 'open' : ''}`}>
        <li className='first-nav-ul-li'><Link to='/' onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to='/about' onClick={() => setMenuOpen(false)}>About</Link></li>
        <li>Menu</li>
        <li><Link to='/booking' onClick={() => setMenuOpen(false)}>Reservations</Link></li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

