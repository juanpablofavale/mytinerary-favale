import React from 'react'

export default function ButtonBar({back, next, set, ciudades, index}) {
  let paginas = []
  for(let i = 0; i < ciudades.col?.pgCount; i++){
    paginas.push(<button className={index==i ? "active": ""} key={i} onClick={() => {set(i)}}>{i + 1}</button>)
  }

  return (
    <>
      <div key={ciudades.name} className="cont-btn-mobile">
        <button onClick={back}>{"<"}</button>
        {paginas.map((pag, index) => pag)}
        <button onClick={next}>{">"}</button>
      </div>
    </>
  )
}