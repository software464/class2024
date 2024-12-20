import './Recipe.css';
import React from 'react';
import ListComponent from './ListComponent';
import { Component } from 'react';
import PropTypes from 'prop-types';
//import TogglePicture from './togglepicture';
import { useState } from "react";

export default function Recipe(props)  {
  const { name, ingredients, directions, picture } = props.recipe || {};
  let [pictureStatus,setPicture]=useState({
    pictureShowing:true
    
  });


 function togglePicture() 
    
  {
    setPicture({
      pictureShowing: !pictureStatus.pictureShowing
    });
  }

   

    

  if (! name) {
    return (<div>loading...</div>)
  }

    return (
      
      <>
        <h2>{name}</h2>
        {pictureStatus.pictureShowing ? <img src={picture} /> : null}
        <br />
        
        <button onClick={togglePicture}>{pictureStatus.pictureShowing ? 'hide picture' : 'show picture'}</button> 
       
        <ListComponent name="ingredients" list={ingredients} />
        <ListComponent name="directions" list={directions} />
      </>
    );
  }


Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    directions: PropTypes.arrayOf(PropTypes.string).isRequired

  }).isRequired
};
