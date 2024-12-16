import React from 'react'
import { useState } from 'react';

export default function TogglePicture(props) {
    const picture=props.picture;
    const [state,setState]=useState({pictureShowing:true});

   const toggle=function () {
        setState({pictureShowing:!state.pictureShowing})
        
    }
  
    
  return (
    <>
    
      {state.pictureShowing ? <img src={picture} /> : null}
        <br />
        
        <button onClick={toggle}>{state.pictureShowing ? 'hide picture' : 'show picture'}</button> 
        </>
  )
}

