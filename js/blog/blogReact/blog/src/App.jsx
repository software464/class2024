import { Outlet } from "react-router"
import LoadUsers from "./loadusers"
import NavBar from "./navBar"
import './NavBar.css'

function App() {
  

  return (
    <>
      <h1> Pcs bloggers</h1>
      <NavBar/>
      <hr />
      <Outlet/>
      
    </>
  )
}

export default App
