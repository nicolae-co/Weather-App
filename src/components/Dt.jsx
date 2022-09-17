import React from 'react'

export default function Dt({dt}) {
    
    

let format = {
  day: "numeric",
  month: "2-digit",
  year: "numeric"
};

  return (
    <div>{dt.toLocaleString("en-gb", format)}</div>
  )
}
