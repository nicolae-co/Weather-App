import React, {useEffect, useState} from 'react';


import { API_KEY } from './constants';
import LocationSrc from './components/LocationSrc';
import {Weather} from './components/Weather';


function App() {

  
  
  const [lon, setLon] = useState()
  const [lat, setLat] = useState()
  const [forecast, setForecast] = useState()

  


  const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`

  useEffect(()=>{
    if(lat){
      fetch(FORECAST_URL)
      .then(response=>response.json())
      .then(response=> setForecast(response.list.map(df=>{
        return{
          temp: df.main.temp,
          temp_min: df.main.temp_min,
          temp_max: df.main.temp_max
        }
      })))
  }
    }
    
  ,)

  
  return (
    <div className="App">
      
      
        <LocationSrc onCityFound={cityInfo=>{
            setLat(cityInfo.lat)
            setLon(cityInfo.lon)
        }}
         
        />
        <div>
        {!!forecast && forecast.map((i, index)=>(
          <div key={index}>
            <Weather temp={i.temp} temp_min={i.temp_min} temp_max={i.temp_max} />
          </div>
        ))}
        </div>
        

        

      
      
      
        
    </div>
  );
}

export default App;
