import React from 'react';
import logo from '../../assets/icon.png'
import './style.css'
const Header = () => {
  return (
    <div className="row App-Header">
      <div className="row logo">
        <img src={logo} alt="logo" />
        <h1>Pet Shop Finder</h1>
      </div>
    </div>);
}

export default Header;