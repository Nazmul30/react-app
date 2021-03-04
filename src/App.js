import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
  import Cart from './component/Cart/Cart';
 import BusinessmanData from './data/data.json'
 import People from './components/People/People'

function App() {
  const [Businessman, setBusinessman]= useState([]);
   const [cart, setCart]=useState([]);

  useEffect(() =>{
    setBusinessman(BusinessmanData);
    // .catch(error=>console.log(error));
    // console.log(BusinessmanData);
  },[])

  
       const handleAddpeople =(people)=>{
         const newCart=[...cart, people];
          setCart(newCart);
       }
  return (
    <div className="App">
      <h1> Name Loaded:{Businessman.length}</h1>
       <h4>Name added:{cart.length}</h4>
        <Cart cart={cart}>this is cart</Cart>
     
      <ul>
       
        {Businessman.map(people=><People people={people} handleAddpeople={handleAddpeople}> </People>)}
      </ul>
 
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        
          Learn React
          >
        </a>
      </header>
    </div>
  );
}

export default App;
