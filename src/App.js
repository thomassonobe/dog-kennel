import { useState } from 'react';
import Form from './components/Form/index'
import Header from './components/Header/index'
import PetshopInfo from './components/PetshopInfo';
import PetshopList from './components/PetshopList';
import './global.css'
const App = () => {
  const [selectedPetshop, setSelectedPetshop] = useState(null)
  const [order, setOrder] = useState({})
  return (
    <div className="App">
      <Header setSelectedPetshop={setSelectedPetshop} selectedPetshop={selectedPetshop} />
      {selectedPetshop === null ?
        (<>
          <Form setSelectedPetshop={setSelectedPetshop} setOrder={setOrder} />
          <PetshopList />
        </>) :
        (<PetshopInfo selectedPetshop={selectedPetshop} order={order} />)}
    </div>)
}

export default App;
