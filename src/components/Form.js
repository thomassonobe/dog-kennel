import React, { useEffect, useState } from 'react';

const formStateModel = {
  date: "",
  small: 0,
  large: 0
}

const Form = () => {

  const [formState, setFormState] = useState(formStateModel)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    console.log(formState)
  }, [formState])


  return (
    <section>
      <h1>Pet Shop Selector</h1>
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
          type="number"
          name="small"
          value={formState.small}
          onChange={handleChange}
        />
        <p>Cachorros grandes</p>
        <input
          type="number"
          name="large"
          value={formState.large}
          onChange={handleChange}
        />
      </form>
      <button>Buscar melhor Pet Shop</button>

    </section>
  )
}

export default Form;