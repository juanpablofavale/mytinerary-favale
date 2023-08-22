import ButtonBar from "../ButtonBar/ButtonBar";
import Image from "../Image/Image";
import { useState, useEffect } from "react";

export default function Carousel() {
  const ciudades = [
    [
      {
        id: "1",
        nombre: "Siete Lagos",
        imgUrl: "../ciudades/7Lagos.jpg",
      },
      {
        id: "2",
        nombre: "San Carlos de Bariloche",
        imgUrl: "../ciudades/bariloche.jpg",
      },
      {
        id: "3",
        nombre: "El Bolson",
        imgUrl: "../ciudades/bolson.webp",
      },
      {
        id: "4",
        nombre: "Cerro Colorado",
        imgUrl: "../ciudades/cerroColorado.jpg",
      },
    ],
    [
      {
        id: "5",
        nombre: "Colonia Suiza",
        imgUrl: "../ciudades/coloniaSuiza.webp",
      },
      {
        id: "6",
        nombre: "Lago Escondido",
        imgUrl: "../ciudades/lagoEscondido.jpg",
      },
      {
        id: "7",
        nombre: "Mar Chiquita",
        imgUrl: "../ciudades/marChiquita.webp",
      },
      {
        id: "8",
        nombre: "Oberá",
        imgUrl: "../ciudades/obera.jpg",
      },
    ],
    [
      {
        id: "9",
        nombre: "Parque Aconcagua",
        imgUrl: "../ciudades/parqueAconcagua.jpg",
      },
      {
        id: "10",
        nombre: "Villa Pehuenia",
        imgUrl: "../ciudades/pehuenia.jpg",
      },
      {
        id: "11",
        nombre: "Posadas",
        imgUrl: "../ciudades/posadas.jpeg",
      },
      {
        id: "12",
        nombre: "Puente del Inca",
        imgUrl: "../ciudades/puenteInca.png",
      },
    ],
    [
      {
        id: "13",
        nombre: "Puerto Iguazú",
        imgUrl: "../ciudades/puertoIguazu.webp",
      },
      {
        id: "14",
        nombre: "Sierra de la Ventana",
        imgUrl: "../ciudades/sierraVentana.jpg",
      },
      {
        id: "15",
        nombre: "Cerro Siete Colores",
        imgUrl: "../ciudades/sieteColores.jpg",
      },
      {
        id: "16",
        nombre: "Ushuaia",
        imgUrl: "../ciudades/ushuaia.jpeg",
      },
    ],
  ];

  let max = 3;
  
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false)
  const [datos, setDatos] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/api/cities?count=4&pg=' + index)
    .then(res => res.json())
    .then(data => setDatos(data))
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
    if (index == max) {
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
      setIndex(3);
    } else {
      setIndex(index - 1);
    }
    pausar()
  }

  return (
    <div className="carousel">
      <ButtonBar back={back} next={next} set={setIndex} ciudades={ciudades} index={index}/>
      <div className="contenedor">
        {
          datos.response ? 
        datos.response?.map( (ciudad, index) => <Image key={index} nombre={ciudad.name} url={ciudad.image} alt={ciudad.name} />)
        :
        <></>
        }
      </div>
      <ButtonBar back={back} next={next} set={setIndex} ciudades={ciudades} index={index}/>
    </div>
  );
}