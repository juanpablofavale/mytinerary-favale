import React from 'react'

export default function ButtonBar({set, datos, index, pausar}) {
  let paginas = []
  for(let i = 0; i < datos.col?.pgCount; i++){
    paginas.push(<button className={index==i ? "active": ""} key={i} onClick={() => {set(i)}}>{i + 1}</button>)
  }

  function nextSlide(){
    if (index == datos.col?.pgCount - 1) {
      set(0);
    } else {
      set(index + 1);
    }
  }

  function next() {
    nextSlide()
    pausar()
  }

  function back() {
    if (index == 0) {
      set(datos.col?.pgCount - 1);
    } else {
      set(index - 1);
    }
    pausar()
  }
  return (
    <>
      <div key={datos.name} className="cont-btn-mobile">
        <button className='back' onClick={back}>{"←"}</button>
        {paginas.map((pag) => pag)}
        <button className='next' onClick={next}>{"→"}</button>
      </div>
    </>
  )
}