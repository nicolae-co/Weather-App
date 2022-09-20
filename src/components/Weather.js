import React from 'react'

export  const  Weather = ({temp, temp_min, temp_max}) => {
  return (
    <div>
        <div>Temp: {temp} / Temp min: {temp_min} / Temp max: {temp_max}</div>
    </div>
  )
}
