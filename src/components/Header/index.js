import React from 'react';
import logo from '../../assets/icon.png'
import './style.css'
const Header = ({ setSelectedPetshop, selectedPetshop }) => {
  const handleClick = () => {
    setSelectedPetshop(null)
  }

  return (
    <div className="row App-Header">
      <div className="row logo" onClick={handleClick}>
        <img src={logo} alt="logo" />
        <h1>Pet Shop Finder</h1>
      </div>
      {selectedPetshop !== null &&
        <button onClick={handleClick}>
          Calcular novamente
        </button>
      }

    </div>);
}

export default Header;