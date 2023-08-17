import React from 'react'

export default function ButtonBar({back, next, set, ciudades}) {
  return (
    <>
      <div key={ciudades.name} className="cont-btn-mobile">
        <button onClick={back}>{"<"}</button>
        {ciudades.map((ciudades, index)=><button key={ciudades.name} onClick={() => {set(index)}}>{index + 1}</button>)}
        <button onClick={next}>{">"}</button>
      </div>
    </>
  )
}