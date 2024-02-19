import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
     <p>Context API</p>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
