import React from 'react'

export default function Country({sys}) {
  return (
    <>
        {
            sys.country && <>
                <div>Country :{sys.country}</div>
                <div>Sunrise :{sys.sunrise}</div>    
                <div>Sunset :{sys.sunset}</div>    
            </>
        }
    </>
  )
}
