
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Display extends Component {

  constructor(props){
    super(props)
  
    
         
  
   
  }


 
  
  render() {
    const {name,temperature,description,speed,icon}=this.props.weather
    //const degrees =`the temparture is  ${temperature} degrees`;
    const wind=`the wind is going ${speed} mph`;
    console.log(speed);

   
    return (
      <div className="row has-weather">
        <div>The weather in {name} </div>
        <img id="icon" src={icon} className="m-auto" />
        <div>{temperature} and {description}</div>
        <div>{wind}</div>
        
      </div>
    )
  }

  
}
Display.propTypes={
  weather:PropTypes.object
}


// export default function display(props) {
//      const {name}=props.weather
//      const {temp}=props.weather.main||{};
//      const {speed}=props.weather.wind||{};
     
//      //const theTemp= props.weather.main.temp;
//      //const theWind= props.wind.speed;
//      const degrees =`the temparture is  ${temp} degrees`;
//      const wind=`the wind is going ${speed} mph`
//     console.log(props);
//   return (
   
//     <div>
//       <h1>{name}</h1>
//       <ul>
//         <li>{degrees}</li>
//         <li>{wind}</li>
//       </ul>
        
      
//     </div>
//   )
// }
