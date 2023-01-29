import logo from './logo.svg';
import './App.css';
import Map from './Map';
import Search from './Search';
import { useState } from 'react';

function App() {
  const [pos, setPos] = useState([])

  return (
    <div className="App">
      <Map positions={pos} />
      <Search setPos={setPos} />
    </div>
  );
}

export default App;
