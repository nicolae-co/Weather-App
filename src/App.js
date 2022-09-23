import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { API_KEY } from './constants';
import LocationSrc from './components/LocationSrc';
import {Weather} from './components/Weather';
import CurrentWeather from './components/CurrentWeather';
import './style.css'

function App() {

  
  
  const [lon, setLon] = useState()
  const [lat, setLat] = useState()
  const [forecast, setForecast] = useState([])
  const [data, setData] =useState({
    main: {},
    sys: {},
    weather: [0],
    wind: {}
  })
  const [isShown, setIsShown] = useState(false);
  
  console.log(forecast)
  
  

  const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`

  useEffect(()=>{
    console.log(lat)
    if(lat){
      fetch(FORECAST_URL)
      .then(response=>response.json())
      .then(response=> setForecast(response.list))   
      setIsShown(true)    
  }}    
  ,[lat, FORECAST_URL])

  
  return (
    <div className="container">
      
      
        <LocationSrc 
            
            onCityFound={cityInfo=>{
              setLat(cityInfo.lat)
              setLon(cityInfo.lon)
              setData(cityInfo.data)
            
            
        }}
         
        />
        
        {isShown && <CurrentWeather 
            
            sky={data.weather[0].main}
            skyDescription={data.weather[0].description}
            skyIcon={data.weather[0].icon}
            currentTemp={data.main.temp}
            feelsLikeTemp={data.main.feels_like}
            currentMinTemp={data.main.temp_min}
            currentMaxTemp={data.main.temp_max}
            currentPressure={data.main.pressure}
            currentHumidity={data.main.humidity}
            windSpeed={data.wind.speed}
            windDeg={data.wind.deg}
            country={data.sys.country}
            cityName={data.name}
        />}

        <div className='row'>
        <div className='col-10 offset-1'>
          <div className='row'>
            {isShown && <p className='h5'>3H FORECAST</p>}
            
          {!!forecast && forecast.map((i, index)=>(
          <div className='col-4 col-sm-2  mt-1 mb-1 pt-2 pb-2 border border-dark ' key={index}>
            <Weather 
              temp={i.main.temp} 
               
              dt_txt={i.dt_txt}
              sky={i.weather[0].main}
              icon={i.weather[0].icon}
            />
          </div>
        ))}
          </div>
        
        </div>
        </div>
        
        

        

      
      
      
        
    </div>
  );
}

export default App;
