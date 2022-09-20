import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export  const  Weather = ({temp, temp_min, temp_max, dt_txt, sky, icon}) => {
  return (
    
      <div className='center '>
        <div>{dt_txt}</div>
          <div>Sky: {sky}</div>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon}/>
          <div>Temp: {temp}°C</div>
          <div>Temp min: {temp_min}°C</div>
          <div>Temp max: {temp_max}°C</div>
        </div>
    
    
  )
}
