import React from 'react';
import { petshops } from '../../models/petshops.js'
import Card from './components/Card/index.js'
import './style.css'
const PetshopList = () => {
  return (<section className="App-PetshopList column">
    {petshops.map(petshop => <Card petshop={petshop} />)}
  </section>
  )
}

export default PetshopList;