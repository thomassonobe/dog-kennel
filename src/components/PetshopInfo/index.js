import React from 'react';
import './style.css'
const PetshopInfo = ({ selectedPetshop, order }) => {
  console.log(order)
  const { small, large } = order
  return (
    <div className="App-PetshopInfo">
      <h2>{selectedPetshop.name}</h2>
      <div className="row desciption">
        <p>Quantidade de cachorros pequenos: {small.amount}</p>
        <span>Preço: {small.amount === 0 ? "0" : small.value}</span>
      </div>
      <div className="row desciption">
        <p>Qauntidade de cachorros grandes: {large.amount} </p>
        <span>Preço: {large.amount === 0 ? "0" : large.value}</span>
      </div>
      <div className="divider"></div>
      <div className="row desciption">
        <p>Total de cachorros: {Number(large.amount) + Number(small.amount)}</p>
        <span>Preço: {(large.amount * large.value) + (small.amount * small.value)}</span>
      </div>
    </div>
  );
}

export default PetshopInfo;