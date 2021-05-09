import React from 'react';
import './style.css'
import parseCurrency from '../../../../utils/parseCurrency'
import toKm from '../../../../utils/toKm'

const Card = ({ petshop }) => {
  return (
    <section className="App-card column">
      <h3>{petshop.name}</h3>
      <div className="price-container row">
        <div className="column">
          <h4>Dia útil</h4>
          <p>Pequeno: {parseCurrency(petshop.price.workday.small)}</p>
          <p>Grande: {parseCurrency(petshop.price.workday.large)}</p>
        </div>
        <div>
          <h4>Fim de semana</h4>
          <p>Pequeno: {parseCurrency(petshop.price.weekend.small)}</p>
          <p>Grande: {parseCurrency(petshop.price.weekend.large)}</p>
        </div>

      </div>
      <p><span>Distancia:</span> {toKm(petshop.distance)}</p>
    </section>
  )
}

export default Card;