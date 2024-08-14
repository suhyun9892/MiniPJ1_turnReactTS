import React, { useState } from 'react'
import './App.css'
import NameForm from './components/Greeting'
import Greeting from './components/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NameForm />
    </>
  )
}

export default App
