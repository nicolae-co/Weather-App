import React, {useState} from 'react'


import { API_KEY } from '../constants'
import '../style.css'

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
    <div className='row mt-4'>
      <div className='col-10 col-sm-10 offset-1'>
        <div className='row center pb-3 border-bottom'>
          
        <input 
            className='input col-8 form-control'
            style={{textAlign: "center"}}
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Enter location"
            required
          />
          <button
              className="icon col-4 search btn btn-primary mt-2"
              onClick={()=>getLocation(city)}
              
            >
              <a id='link' href='#first-row'>Search</a>
          </button>
        </div>
          
      </div>
        
        
    </div>
  )
}
