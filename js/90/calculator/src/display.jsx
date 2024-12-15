import React from 'react'

export default function Display(props) {
    const value=props.value||0;
  return (
    
    <h1>
        
         {`total is ${value}`}
    </h1>
        
     
    
  )
}
