import React from 'react';
import './style.css'

const Card = ({ petshop }) => {
  return (
    <section className="column">
      <h3>{petshop.name}</h3>
      <p>{petshop.distance}</p>
      <div className="row">
        <div>
          <h4>Dia útil</h4>
          <p>Pequeno:{petshop.price.workday.small}</p>
          <p>Grande:{petshop.price.workday.large}</p>
        </div>
        <div>
          <h4>Fim de semana</h4>
          <p>Pequeno:{petshop.price.weekend.small}</p>
          <p>Grande:{petshop.price.weekend.large}</p>
        </div>
      </div>
    </section>
  )
}

export default Card;