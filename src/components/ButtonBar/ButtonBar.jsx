import React from 'react'

export default function ButtonBar({back, next, set, ciudades, index}) {
  return (
    <>
      <div className="cont-btn-mobile">
        <button onClick={back}>{"<"}</button>
        {ciudades.map((ciudades, ind)=>{
          return <button className={index==ind ? "active": ""} onClick={() => {set(ind)}}>{ind + 1}</button>
        })}
        <button onClick={next}>{">"}</button>
      </div>
    </>
  )
}