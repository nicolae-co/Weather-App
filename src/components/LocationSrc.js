import React, {useState} from 'react'


import { API_KEY } from '../constants'

export default function LocationSrc({onCityFound}) {

    const [city, setCity] = useState('')
    


    const getLocation = (c) =>{
      const url= `https://api.openweathermap.org/data/2.5/weather?q=${c}&units=metric&appid=${API_KEY}`
        fetch(url)
      
        .then(response => response.json())
        .then(response =>{onCityFound({
                lon: response.coord.lon,
                lat: response.coord.lat,
                data: response          
            })
        
          
        
        
        setCity('')})
    }



  return (
    <div className='row center col-4 offset-4 mt-4'>
        <input style={{textAlign: "center"}}
          
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Enter location"
          required
        />
        <button
            className="icon search"
            onClick={()=>getLocation(city)}
          >
            Getdata
        </button>
        
    </div>
  )
}
