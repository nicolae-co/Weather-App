import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export  const  Weather = ({temp, dt_txt, sky, icon}) => {

  const formatedDate = dt_txt.split('')
  console.log(formatedDate)

  const year = formatedDate.slice(0,4).toString().replace(/,/g, '')  
  const month = formatedDate.slice(5,7).toString().replace(/,/g, '')  
  const day = formatedDate.slice(8,10).toString().replace(/,/g, '')  

  const hour = formatedDate.slice(11,13).toString().replace(/,/g, '')
  const minute = formatedDate.slice(14,16).toString().replace(/,/g, '')
  
  const date = day.concat(month.concat(year))
  console.log(date)

  return (
      <>
        


      <div className='center '>
        
      <div>{day}/{month}/{year}</div>
      <div>{hour}:{minute}</div>
        
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon}/>
        <div>{Math.round(temp)}°C</div>
      </div>
      </>
      
    
    
  )
}
