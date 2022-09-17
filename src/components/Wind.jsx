import React from 'react'

export default function Wind({wind}) {
  return (
    <>
        {wind.speed && <>
            <div>Wind speed: {wind.speed}</div>
            <div>Wind direction: {wind.deg}</div>
        </>}
    </>
  )
}
