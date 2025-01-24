import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './template/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <h1>This project is created to undersand how to use git
       in VS code
     </h1>
    </>
  )
}

export default App
