import React, { useState } from 'react';
import { petshops } from '../../models/petshops'
import './style.css'

const formStateModel = {
  date: "",
  small: 0,
  large: 0
}

const Form = ({ setSelectedPetshop, setOrder }) => {
  const [formState, setFormState] = useState(formStateModel)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const isWeekend = (date) => {
    const dt = new Date(date)
    if (dt.getDay() === 5 || dt.getDay() === 6) return true
    return false
  }

  const handleClick = () => {
    let petshop
    if (isWeekend(formState.date)) {
      petshop = petshops.reduce((accumulator, petshop) => {
        if ((petshop.price.weekend.small * formState.small) + (petshop.price.weekend.large * formState.large) < (accumulator.price.weekend.small * formState.small) + (accumulator.price.weekend.large * formState.large)) {
          accumulator = petshop
        } else if ((petshop.price.weekend.small * formState.small) + (petshop.price.weekend.large * formState.large) === (accumulator.price.weekend.small * formState.small) + (accumulator.price.weekend.large * formState.large)) {
          if (petshop.distance < accumulator.distance) {
            accumulator = petshop
          }
        }
        return accumulator
      })
      setSelectedPetshop(petshop)
      setOrder(
        {
          "small": {
            "amount": formState.small,
            "value": petshop.price.weekend.small
          },
          "large": {
            "amount": formState.large,
            "value": petshop.price.weekend.large
          },
        }
      )
    } else {
      petshop = petshops.reduce((accumulator, petshop) => {
        if ((petshop.price.workday.small * formState.small) + (petshop.price.workday.large * formState.large) < (accumulator.price.workday.small * formState.small) + (accumulator.price.workday.large * formState.large)) {
          accumulator = petshop
        } else if ((petshop.price.workday.small * formState.small) + (petshop.price.workday.large * formState.large) === (accumulator.price.workday.small * formState.small) + (accumulator.price.workday.large * formState.large)) {
          if (petshop.distance < accumulator.distance) {
            accumulator = petshop
          }
        }
        return accumulator
      })
      setSelectedPetshop(petshop)
      setOrder(
        {
          "small": {
            "amount": formState.small,
            "value": petshop.price.workday.small
          },
          "large": {
            "amount": formState.large,
            "value": petshop.price.workday.large
          },
        }
      )
    }
  }

  return (
    <section className="App-Form column">
      <form>
        <p>Data:</p>
        <input
          type="date"
          name="date"
          value={formState.date}
          onChange={handleChange}
        />
        <p>Cachorros pequenos</p>
        <input
          min={0}
          type="number"
          name="small"
          value={formState.small}
          onChange={handleChange}
        />
        <p>Cachorros grandes</p>
        <input
          min={0}
          type="number"
          name="large"
          value={formState.large}
          onChange={handleChange}
        />
      </form>
      <button
        onClick={handleClick}
        disabled={formState.date === "" || (formState.large === 0 && formState.small === 0)}>
        Buscar o melhor Pet Shop
      </button>
    </section>
  )
}

export default Form;