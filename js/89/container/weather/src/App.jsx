import { Component } from 'react'
import Display from './assets/display.jsx'

class App extends Component {

  state = {
    zip: "",
    weather: {}
  }

  handelZip=e=>{
    this.setState({
      zip:e.target.value

    })
  }

  async fetchWeather(zip) {
    try {
      const apiKey = '4d940566413cbb48ddbe156f2b502364';
      const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=${apiKey}&units=imperial&lang=he`);
      if (!r.ok) {
        throw new Error(`${r.status} - ${r.statusText}`);
      }
      const weatherData = await r.json();
      //console.log(weather);

      this.setState({
        weather: {
          name: weatherData.name,
          temperature: weatherData.main.temp,
          description: weatherData.weather[0].description,
          speed: weatherData.wind.speed,
          icon: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`

        }
      });



    } catch (e) {
      console.error(e);
    }
  }
  componentDidUpdate(prevProps,prevState) {
    if (prevState.zip !== this.state.zip)
    this.fetchWeather(this.state.zip);

  }
  //componentdidmount
  //fetch weather with ajax
  //setstate wether =weather

  render() {
    const { weather, } = this.state;
    const theWeather=<Display weather={weather} />
    
    console.log(this.state.weather)

    return (
      
    <div className="container text-center">
      <div className="row justify-content-end">
        <div className="col-3 col-md-2">
          <input className="form-control" id="zip" 
           value={this.state.zip} onChange={this.handelZip}/>
        </div>
      </div>

        {theWeather}


    </div>


    )

    //return <h1>the wether is{weatherDetails}</h1>
    ///can do this in a child component  called display weather and pass "display weatherDetails" as props(a full //object) to display the weather.




  }
}

export default App
