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
    
     
        </>
  )
}

