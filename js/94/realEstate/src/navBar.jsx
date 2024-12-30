import React from 'react'
import { Link,NavLink } from 'react-router'

export default function navBar() {
  return (
    <nav>
        <ul>
        <li>
            <NavLink  to='/'> home</NavLink>
            </li>|
            
        
            <li>
            <NavLink  to='/buy'>buy</NavLink>
            </li>|
            <li>
            <NavLink  to='/sell'>sell</NavLink>
            </li>
        </ul>
        
       
    </nav>
  )
}
