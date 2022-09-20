import React from 'react'

export default function CurrentWeather({
    sky,
     skyDescription,
      skyIcon,
      currentTemp,
      feelsLikeTemp,
      currentMinTemp,
      currentMaxTemp,
      currentPressure,
      currentHumidity,
      windSpeed,
      windDeg,
      country,
      cityName
    }) {
    
  return (
    <div className='row mt-4'>
      <div className='col-10 offset-1'>
        <div className='row'>
          <div style={{fontSize: 20, fontWeight:600}} className='col-1 center border border-dark '>{cityName},{country}</div>
          <div className='col-2 center border border-dark'>Temp: {currentTemp}°C, Feels like:{feelsLikeTemp}°C</div>
          <div className='col-2 center border border-dark'>Min: {currentMinTemp}°C / Max: {currentMaxTemp}°C</div>
          <div className='col-2 center border border-dark'>Pressure: {currentPressure} / Humidity: {currentHumidity}</div>
          <div className='col-2 center border border-dark'>Wind speed: {windSpeed} / Wind direction: {windDeg}</div>
          <div className='col-1 center border border-dark'>Sky: {sky}</div>
          <div className='col-1 center border border-dark'>Description: {skyDescription}</div>
          <div className='col-1 center border border-dark '>
            <img src={`http://openweathermap.org/img/wn/${skyIcon}@2x.png`} alt={skyIcon}/>
          </div>
        </div>
      </div>
    </div>
    
    
    
  )
}
