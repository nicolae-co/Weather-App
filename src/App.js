import React, {useState} from 'react';
import axios from 'axios';
import LatLon from './LatLon';
import Weather from './components/Weather';
import Main from './components/Main';
import Visibility from './components/Visibility';
import Wind from './components/Wind';
import Dt from './components/Dt';
import Country from './components/Country';
import CityName from './components/CityName';


function App() {

  const [place, setPlace] = useState('')
  const [weatherData, setWeatherData] = useState({
    weather: [0],
    main: {},
    visibility: '',
    dt: '',
    sys: {},
    wind: {},
    name: ''
  })
  const [lon, setLon] = useState([])
  const [lat, setLat] = useState([])
  const [forecast, setForecast] = useState({})

  


  const API_KEY = '6e3bb23f9df81f03cf904d9e14b5de45'
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${API_KEY}`
  const FORECAST_URL =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`

  const getWeatherData = () =>{
    axios.get(WEATHER_URL)
      .then(response=>{
        setWeatherData(response.data)
      })
      

    axios.get(WEATHER_URL)
      .then(response =>{
        console.log(response.data.coord.lon)
        setLon(response.data.coord.lon)
      })
    axios.get(WEATHER_URL)
      .then(response =>{
        console.log(response.data.coord.lat);
        setLat(response.data.coord.lat)
      })
    axios.get(FORECAST_URL)
      .then(response=>{
        setForecast(response.data)
      })
      .catch(error=>{
        console.log(error)
      })

      
      
  }

  
  return (
    <div className="App">
      
      <input
          className="col"
          value={place}
          onChange={(event) => setPlace(event.target.value)}
          placeholder="Enter location"
          required
        />
      <button
          className="icon search"
          onClick={getWeatherData}
        >Getdata</button>
        <LatLon lat={lat} lon={lon} />

      <Weather weather={weatherData.weather[0]} />
      <Main main={weatherData.main} />
      <Visibility visibility={weatherData.visibility} />
      <Wind wind={weatherData.wind} />
      <Dt dt={weatherData.dt} />
      <Country sys={weatherData.sys} />
      <CityName name={weatherData.name}/>
      
        
    </div>
  );
}

export default App;
