import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'Bienvendio a SMO_Club'}/>
    </>
  )
}

export default App
