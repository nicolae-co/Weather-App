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

  let monthString
  switch (month) {
    case "01": monthString = 'JAN'; break;
    case "02": monthString = 'FEB'; break; 
    case "03": monthString = 'MAR'; break; 
    case "04": monthString = 'APR'; break; 
    case "05": monthString = 'MAY'; break; 
    case "06": monthString = 'JUN'; break; 
    case "07": monthString = 'JUL'; break; 
    case "08": monthString = 'AUG'; break; 
    case "09": monthString = 'SEPT'; break; 
    case "10": monthString = 'OCT'; break; 
    case "11": monthString = 'NOV'; break; 
    case "12": monthString = 'DEC'; break;
  
    default:
      break;
  }



  return (
      
        


      <div className='center d-flex flex-row '>
        <div style={{fontSize: 10}}>
        <div>{day}/{monthString}</div>
        <div>{hour}:{minute}</div>
        </div>
        
        
        <img className='icon-size' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon}/>
        <div style={{fontSize: 20}}>{Math.round(temp)}°C</div>
      </div>
      
      
    
    
  )
}
