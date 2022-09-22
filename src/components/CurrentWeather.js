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
    <div className='row mt-4' id='first-row'>
      <div className='col-10 offset-1'>
        <div className='row '>
          <div className='col-12 col-sm-12 mb-5 center'>
            <div className='col-12 col-sm-1 pt-3 center h1'>{cityName},{country}</div>
            <div style={{fontSize: 60}}classname='col-12 col-md-6 '>{Math.round(currentTemp)}°C</div>
            <div className='col-12 col-sm-12 center'>{Math.round(currentMinTemp)}°C / {Math.round(currentMaxTemp)}°C</div>
            <div className='col-12 col-sm-1 center'>
              <img src={`http://openweathermap.org/img/wn/${skyIcon}@2x.png`} alt={skyIcon}/>
            </div>
            <div className='col-12 col-sm-1 center font-size-medium'>{sky}</div>
            <div className='col-12 col-sm-1 center grey-text'>{skyDescription}</div>
          </div>
          
          
          

          
        </div>
        <div className='row mb-5'>
          <div className='col-12 col-sm-12 h5'>COMFORT LEVEL</div>
          <div className='col-6 col-sm-6'>
            <p className='center grey-text'>Humidity</p>
            <div className='center'>{currentHumidity}%</div>
            <p className='center grey-text'>Pressure</p>
            <div className='center'>{currentPressure} hPa</div>
          </div>
          <div className='col-6 col-sm-6 center'>
            <p className='center grey-text'>Temperature felt</p>
            <div className='center'>{Math.round(feelsLikeTemp)}°C</div>
          </div>
        </div>

        <div className='row mb-5'>
          <div className='col-12 col-sm-12 h5'>WIND</div>
          <p className='col-6 col-sm-6 grey-text'>Wind speed</p>
          <div className='col-6 col-sm-6'>{windSpeed}</div>
          <p className='col-6 col-sm-6 grey-text'>Wind direction</p>
          <div className='col-6 col-sm-6'>{windDeg}</div>
          
        </div>
      </div>
    </div>
    
    
    
  )
}
