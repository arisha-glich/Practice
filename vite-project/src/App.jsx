import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Checkout from './Pages/Checkout'
import AboutUs from './Pages/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <AboutUs/>
      
        
    </>
  )
}

export default App
