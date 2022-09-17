import React from 'react'

export default function Visibility({visibility}) {
  return (
    <>
        {visibility && <>
            <div>Visibility {visibility}</div>
        </>}
    </>
  )
}
