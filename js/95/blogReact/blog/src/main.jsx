import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from 'react-router'
import LoadUsers from './loadusers.jsx'
import LoadPosts from'./LoadPosts'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}>
    <Route index='true' element={<LoadUsers/>}/>
    <Route path='/posts/:id/:name/:color' element={<LoadPosts/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  
)
