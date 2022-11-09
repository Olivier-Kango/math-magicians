import React from 'react';
import { Link } from 'react-router-dom';

const myStyle = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'end',
  alignItems: 'center',
};

const link = {
  color: 'black',
};

const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const h1 = {
  margin: '0',
};

const Navbar = () => (
  <header style={header}>
    <h1 style={h1}>Math Magicians</h1>
    <nav style={myStyle}>
      <Link to="/" style={link}>Home</Link>
      <Link to="/calculator" style={link}>Calculator</Link>
      <Link to="/quote" style={link}>Quote</Link>
    </nav>
  </header>
);

export default Navbar;
