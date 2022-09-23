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
    
  let windCoords = "";
  if (windDeg === 0) {
    windCoords = "N";
  }
  if (windDeg > 0 && windDeg < 90) {
    windCoords = "NE";
  }
  if (windDeg === 90) {
    windCoords = "E";
  }
  if (windDeg > 90 && windDeg < 180) {
    windCoords = "SE";
  }
  if (windDeg === 180) {
    windCoords = "S";
  }
  if (windDeg > 180 && windDeg < 270) {
    windCoords = "SW";
  }
  if (windDeg === 270) {
    windCoords = "W";
  }
  if (windDeg > 270) {
    windCoords = "NW";
  }


  return (
    <div className='row mt-4' id='first-row'>
      <div className='col-10 offset-1'>
        <div className='row '>
          <div className='col-12 col-sm-6 mb-5 center border-end'>
            <div className='col-12 col-sm-1 pt-3 center h1'>{cityName},{country}</div>
            <div style={{fontSize: 60}} className='col-12 col-md-6 center'>{Math.round(currentTemp)}°C</div>
            <div className='col-12 col-sm-12 center'>{Math.round(currentMinTemp)}°C / {Math.round(currentMaxTemp)}°C</div>
            <div className='col-12 col-sm-1 center'>
              <img src={`http://openweathermap.org/img/wn/${skyIcon}@2x.png`} alt={skyIcon}/>
            </div>
            <div className='col-12 col-sm-1 center font-size-medium'>{sky}</div>
            <div className='col-12 col-sm-4 center grey-text'>{skyDescription}</div>
          </div>
          
          
          

          
        {/* </div> */}
        {/* <div className='row mb-5'> */}
        <div className='col-6 col-sm-3'>
          <div className='col-12 col-sm-12 h5 mb-4 px-2 border-bottom'>COMFORT LEVEL</div>
            <div className='col-12 col-sm-6'>
              <div >
                <div className='mb-2'>
                  <p className=' grey-text'>Humidity</p>
                  <div className='font-weight'>{currentHumidity}%</div>
                </div>
                <div className='mb-2'>
                  <p className=' grey-text'>Pressure</p>
                  <div className='font-weight'>{currentPressure} hPa</div>
                </div>
                <div className='mb-2'>
                  <p className=' grey-text'>Temperature felt</p>
                  <div className='font-weight'>{Math.round(feelsLikeTemp)}°C</div>
                </div>
              </div>
              
            </div>
        </div>
          
        {/* </div> */}

        {/* <div className='row mb-5'> */}
        <div className='col-6 col-sm-3'>
        <div className='col-12 col-sm-12 h5 mb-4 px-2 border-bottom'>WIND</div>
        <div>
            <div className='mb-2'>
              <p className='col-12 col-sm-12 grey-text'>Wind speed</p>
              <div className='col-12 col-sm-12 font-weight'>{windSpeed} m/s</div>
            </div>
            <div className='mb-2'>
              <p className='col-12 col-sm-12 grey-text'>Wind direction</p>
              <div className='col-12 col-sm-12 font-weight'>{windCoords}-{windDeg}°</div>
            </div>
        </div>
                    
        </div>
          
          
        </div>
      </div>
    </div>
    
    
    
  )
}
