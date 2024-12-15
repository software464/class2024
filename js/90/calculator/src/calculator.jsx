import React, { Component } from 'react'
import Display from "./display.jsx"

export default class calculator extends Component {
    count=1;
    state ={
        current:0,
        operator:0,
        total:0,
        display:0
    }
    onclick=function (value){
        console.log(this.state);
        switch (this.count) {
            case 1:{
                this.count++
                this.setState({
                    current:value

                })
            }
                
                break;
                case 2:{
                    this.count++
                this.setState({
                    total:this.state.current,
                    current:0,
                    operator:value,


                })
            }
                
                break;
                case 3:
                    {
                    this.count++
                    this.setState({
                        
                        current:value,
                        
    
    
                    })
                }
                    break;
                    case 4:
                    {
                    this.count=0;
                    this.setState({
                        
                        display:this.state.current+this.state.total
                        
    
    
                    })
                }
                    break;
        
            default:
                break;
        }
    //onclick=this.onclick.Bind(this,value);

       


    }
  render() {
    return (
        <div>
        <button onClick={e =>{
            this.onclick(e.target.innerText)}

        }>1</button>
        <button onClick={e =>{
            this.onclick(e.target.innerText)}

        }>2</button>
        <button onClick={e =>{
            this.onclick(e.target.innerText)}

        }>3</button>
        <button >4</button>
        <button>5</button>
        <button
        onClick={e =>{
            this.onclick(e.target.innerText)}

        }>+</button>
        <button
        onClick={e =>{
            this.onclick(e.target.innerText)}

        }>=</button>
        <Display value=
        {this.state.display}/>
      </div>
    )
  }
}

