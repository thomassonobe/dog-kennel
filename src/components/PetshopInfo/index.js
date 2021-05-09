import React from 'react';
import parseCurrency from '../../utils/parseCurrency';
import './style.css'
const PetshopInfo = ({ selectedPetshop, order }) => {
  const { small, large } = order
  return (
    <div className="App-PetshopInfo">
      <h2>{selectedPetshop.name}</h2>
      <div className="row desciption">
        <p>Quantidade de cachorros pequenos: {small.amount}</p>
        <span>{small.amount === 0 ? parseCurrency(0) : parseCurrency(small.value * small.amount)}</span>
      </div>
      <div className="row desciption">
        <p>Qauntidade de cachorros grandes: {large.amount} </p>
        <span>{large.amount === 0 ? parseCurrency(0) : parseCurrency(large.value * large.amount)}</span>
      </div>
      <div className="divider"></div>
      <div className="row desciption">
        <p>Total de cachorros: {Number(large.amount) + Number(small.amount)}</p>
        <span>Total: {parseCurrency((large.amount * large.value) + (small.amount * small.value))}</span>
      </div>
    </div>
  );
}

export default PetshopInfo;