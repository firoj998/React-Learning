import { useState } from 'react'
import './App.css'
import ClassComponent from './ClassComponent'
import Contact from './Contact'
import Users from './Users'

function App() {
  // const [count, setCount] = useState(0)
  const [name, setName]=useState('Amaan');

  return (
    <>
      {/* <h1>Hello World!</h1> */}
      {/* <ClassComponent name = {name} /> */}
      {/* <button onClick={()=>{setName("Hassan")}}>Update props</button> */}
      {/* <Contact/> */}
      <Users />
    </>
  )
}

export default App
