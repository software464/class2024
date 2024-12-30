import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router'
import NavBar from './navBar'
import './navBar.css'

function App() {
  

  return (
    <>
    <header>
     A2ztrading
   
    </header>
    <NavBar/>
    <hr />
    
      <Outlet/>
    </>
  )
}

export default App
