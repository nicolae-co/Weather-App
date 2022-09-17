import React from 'react'

export default function Main({main}) {
  return (
    <>
        {main.temp && <>
            <div>Temperature: {main.temp}</div>
            <div>Feels like: {main.feels_like}</div>
            <div>Minimum temperature: {main.temp_min}</div>
            <div>Maximum temperature: {main.temp_max}</div>
            <div>Pressure: {main.pressure}</div>
            <div>Humidity: {main.humidity}</div>
        </>}
    </>
    
    
  )
}
