import React from 'react'

export default function Weather({weather}) {
  return (
    <>
        <div>{weather.main}</div>   
        <div>{weather.description}</div> 
        <div>
            {weather.icon && <img
                id="wicon"
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                alt="Weather icon"
             />}
        </div> 
    </>
    
  )
}
