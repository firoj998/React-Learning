import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  //let counter = 15;
let [counter,setCounter ] =  useState(15)
 const addValue = ()=>{
  if(counter<20)
  {
 
counter = counter+1;
  }
setCounter(counter)
// console.log("addValue clicked",counter);
  }

  const removeValue = ()=>{
   if(counter>0){
    counter = counter-1;
  
   }
    setCounter(counter)
    // console.log("addValue clicked",counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
