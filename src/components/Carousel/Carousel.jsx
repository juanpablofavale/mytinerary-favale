import ButtonBar from "../ButtonBar/ButtonBar";
import Image from "../Image/Image";
import { useState, useEffect } from "react";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false)
  const [datos, setDatos] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:3000/api/cities?count=4&pg=' + index)
    .then(res => res.json())
    .then(data => {
      setDatos(data)
    })
  }, [,index])

  useEffect(()=>{
    let interv
    if (!isPaused){
      interv = setInterval(()=>{
        nextSlide()
      }, 3000)
      return () => clearInterval(interv)
    }
  }, [isPaused, index])

  function pausar(){
    if (!isPaused){
      setIsPaused(true)
    }
    setTimeout(() => {
      setIsPaused(false)
    }, 5000);
  }

  function nextSlide(){
    if (index == datos.col?.pgCount - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function next() {
    nextSlide()
    pausar()
  }

  function back() {
    if (index == 0) {
      setIndex(datos.col?.pgCount - 1);
    } else {
      setIndex(index - 1);
    }
    pausar()
  }

  return (
    <div className="carousel">
      <ButtonBar back={back} next={next} set={setIndex} ciudades={datos} index={index}/>
      <div className="contenedor">
        {
          datos.response ? 
          datos.response?.map( (ciudad, index) => <Image key={index} nombre={ciudad.name} url={ciudad.image} alt={ciudad.name} />)
          :
          <></>
        }
      </div>
      <ButtonBar back={back} next={next} set={setIndex} ciudades={datos} index={index}/>
    </div>
  );
}