import { Component } from 'react'


import './App.css'

class App extends Component {
  state = {
    current: "0",
  }

  handleClick = (btn) => {
    let result;
   
    const { current,operator ,last} = this.state;
    switch (btn) {
      case "C":
        this.setState({
          current:""
        })
        break;
      case "+":
      case "-":
      case "*":

        this.setState({
          last: current,
          current: "",
          operator: btn

        })
        break;
        case "=":
          switch (operator) {
            case "+":
              result=Number(current)+Number(last);
              break;
              case "-":
                result=Number(last)-Number(current);
            break;
            case "*":
                result=Number(current)*Number(last);
            break;
          
            default:
              this.setState({
                current:result
              })
             
              break;
          }
          this.setState({
            last:null,
            current:result.toString(),
            operator:null
          })
          
          break;
    

      default:
        this.setState({
          current: current === "0" ? btn.toString() : current + btn
        })

        break;
    }

   

  }


  render() {
    const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "+", "-", "C", "*", "/", "="].map(b =>
      <button key={b} onClick={() => {
        this.handleClick(b)
      }}>{b}</button>
      



    )
    console.log(this.state)
    return (


      <div className='calculator'>
        <input type="text" value={this.state.current} readOnly />
        {/* <button onClick={()=>{
      this.handleClick(7)
    }}>7</button>
    <button onClick={()=>{
      this.handleClick(8)
    }}>8</button>
    <button onClick={()=>{
      this.handleClick(9)
    }}>9</button>
    <button onClick={()=>{
      this.handleClick(4)
    }}>4</button>
    <button onClick={()=>{
      this.handleClick(5)
    }}>5</button>
    <button onClick={()=>{
      this.handleClick(6)
    }}>6</button>
    <button onClick={()=>{
      this.handleClick(3)
    }}>1</button>
    <button onClick={()=>{
      this.handleClick(1)
    }}>2</button>
    <button onClick={()=>{
      this.handleClick(3)
    // }}>3</button> */}
        {buttons}
      </div>


    )
  }
}

export default App
