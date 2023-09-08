import { server } from "../../utils/axios";
import ButtonBar from "../ButtonBar/ButtonBar";
import Image from "../Image/Image";
import { useState, useEffect, useRef } from "react";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false)
  const [datos, setDatos] = useState([])
  
  useEffect( () => {
    server.get('/cities' + '?count=4&pg=' + index)
    .then(res => setDatos(res.data))
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
          datos.response && 
          datos.response?.map( (ciudad, index) => <Image key={index} nombre={ciudad.interests[0]} url={ciudad.image} alt={ciudad.name} />)
        }
      </div>
      <ButtonBar pausar={pausar} set={setIndex} datos={datos} index={index}/>
    </div>
  );
}