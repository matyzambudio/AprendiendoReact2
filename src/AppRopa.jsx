import './App.css';
import {useState} from 'react';

const App = () => {
  const [count,setCount] = useState(0);
  const [cantidad,setCant] = useState(10);
  const sumar = () => {
    setCount(prev=>count+1)
    setCant(prev=>cantidad-1)
   if(cantidad == 0 || count == 10){
    setCant(10)
    setCount(0)
   }else{
    setCount(prev=>count+1)
    setCant(prev=>cantidad-1)
   }
  }

  return (
    <div className="content">
      <h1>Articulos {count}</h1>
      <p>{cantidad}</p>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};

export default App;
