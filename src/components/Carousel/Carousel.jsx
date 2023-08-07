import "./carousel.css";
import Image from "../Image/Image";
import { useState } from "react";
/*import { FcLeft as Back, FcRight as Next } from 'react-icons/fc'*/
import {
  BiSolidLeftArrowAlt as Back,
  BiSolidRightArrowAlt as Next,
} from "react-icons/bi";

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

  const min = 0,
    max = 3;

  const [index, setIndex] = useState(0);

  function next() {
    if (index == max) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function back() {
    if (index == 0) {
      setIndex(3);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <div className="carousel">
      <div className="cont-btn-mobile">
        <button onClick={back}>{"<"}</button>
        <button onClick={() => {setIndex(0)}}>1</button>
        <button onClick={() => {setIndex(1)}}>2</button>
        <button onClick={() => {setIndex(2)}}>3</button>
        <button onClick={() => {setIndex(3)}}>4</button>
        <button onClick={next}>{">"}</button>
      </div>
      <div className="contenedor">
        <div className="row">
          <Image
            nombre={ciudades[index][0].nombre}
            url={ciudades[index][0].imgUrl}
            alt={ciudades[index][0].nombre}
          />
          <Image
            nombre={ciudades[index][1].nombre}
            url={ciudades[index][1].imgUrl}
            alt={ciudades[index][1].nombre}
          />
        </div>
        <div className="row">
          <Image
            nombre={ciudades[index][2].nombre}
            url={ciudades[index][2].imgUrl}
            alt={ciudades[index][2].nombre}
          />
          <Image
            nombre={ciudades[index][3].nombre}
            url={ciudades[index][3].imgUrl}
            alt={ciudades[index][3].nombre}
          />
        </div>
      </div>
      <div className="cont-btn-mobile">
        <button onClick={back}>{"<"}</button>
        <button onClick={() => {setIndex(0)}}>1</button>
        <button onClick={() => {setIndex(1)}}>2</button>
        <button onClick={() => {setIndex(2)}}>3</button>
        <button onClick={() => {setIndex(3)}}>4</button>
        <button onClick={next}>{">"}</button>
      </div>
    </div>
  );
}
