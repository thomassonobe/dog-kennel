import { useState } from 'react';
import Form from './components/Form/index'
import Header from './components/Header/index'
import './global.css'
const App = () => {
  const [selectedPesthop, setSelectedPesthop] = useState(null)
  return (
    <div className="App">
      <Header />
      {selectedPesthop === null ? (<Form setSelectedPesthop={setSelectedPesthop} />) : (null)}
    </div>)
}

export default App;
