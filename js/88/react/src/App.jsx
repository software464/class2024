import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Address from './address.jsx'

function App() {
   let name ="donald"
  const newApp=(
   <>
    <h1 >hello world {`${name}`}</h1>
   <Address number="464" />
    </>
    
  )
  
  return newApp

  
}

export default App
