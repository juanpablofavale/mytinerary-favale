import ButtonBar from "../ButtonBar/ButtonBar";
import Image from "../Image/Image";
import { useState, useEffect } from "react";

export default function Carousel() {
  const urlApi = "http://190.97.40.223:3000/api/cities"
  //const urlApi = 'http://localhost:3000/api/cities'
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false)
  const [datos, setDatos] = useState([])
  
  useEffect(()=>{
    fetch(urlApi + '?count=4&pg=' + index)
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

  function nextSlide(){
    if (index == datos.col?.pgCount - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function pausar(){
    if (!isPaused){
      setIsPaused(true)
    }
    setTimeout(() => {
      setIsPaused(false)
    }, 5000);
  }

  return (
    <div className="carousel">
      <ButtonBar pausar={pausar} set={setIndex} datos={datos} index={index}/>
      <div className="contenedor">
        {
          datos.response ? 
          datos.response?.map( (ciudad, index) => <Image key={index} nombre={ciudad.name} url={ciudad.image} alt={ciudad.name} />)
          :
          <></>
        }
      </div>
      <ButtonBar pausar={pausar} set={setIndex} datos={datos} index={index}/>
    </div>
  );
}