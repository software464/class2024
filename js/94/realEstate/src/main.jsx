import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import Buy from './buy.jsx'
import Sell from
  './sell.jsx'
  import Home from'./home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element=< App/> >
        <Route index={true} element=<Home /> />
        
          <Route path='/buy' element=<Buy /> />
          <Route path='/sell' element=<Sell /> />
        </Route>

      </Routes>
    </BrowserRouter>


  </StrictMode>
)
