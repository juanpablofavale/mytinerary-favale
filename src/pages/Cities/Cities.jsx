import React, { useEffect, useState } from "react";
import LayoutMain from "../LayoutMain/LayoutMain";
import "./cities.css";
import { Link } from "react-router-dom";
import CardCity from "../../components/CardCity/CardCity";
import ButtonBar from "../../components/ButtonBar/ButtonBar";

export default function Cities() {
  document.title = "MyTinerary - Cities"
  //const urlApi = "http://190.97.40.223:3000/api/cities"
  //const urlApi = "http://localhost:3000/api/cities"
  const urlApi = 'https://mytinerary-back-favale-6sxm-dev.fl0.io/api/cities'
  
  const [datos, setDatos] = useState("Loading");
  const [filtro, setFiltro] = useState("");
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)

  const cityNotFound = {
    name: "City Not Found",
    image:"./notFound.png",
    interests: [],
    state: "",
    _id: "0"
  }

  const pages = [
    {
      value: 0,
      caption:"All Cities"
    },
    {
      value: 1,
      caption:"One City"
    },
    {
      value: 2,
      caption:"Two Cities"
    },
    {
      value: 5,
      caption:"Five Cities"
    },
    {
      value: 10,
      caption:"Ten Cities"
    },
  ]

  function obtenerDatos(){
    fetch(urlApi+"?count=" + count + "&pg=" + index)
      .then((res) => res.json())
      .then((data) => {
        setDatos(data)
      });
  }

  useEffect(() => {
    obtenerDatos()
  }, [, index, count]);

  function filtrar(){
    fetch(urlApi + "?name=" + filtro)
      .then((res) => res.json())
      .then((data) => {
        setDatos(data)
      })
  }

  function borrarFiltro(){
    setFiltro("")
    setCount(0)
    obtenerDatos()
  }

  function keyPressHandler(event){
    if (event.key=="Enter"){
      filtrar()
    }else if (event.key=="Escape"){
      borrarFiltro()
    }
  }

  function selectHandler(evnt){
    setIndex(0)
    setCount(evnt.target.value)
  }

  return (
    <main className="pgCities">
      <div className="hero">
        <div className="search-cont">
          {filtro ? 
            <p onClick={borrarFiltro}>X</p>
          :
            <></>
          }
          <input placeholder="Search" onChange={event => {setFiltro(event.target.value)}} onKeyDown={keyPressHandler} className="search" type="text" value={filtro} />
          <img onClick={filtrar} className="srch-img" src="./lupa.png" alt="search" />
        </div>
        {filtro ?
          <></>
        :
          <div className="divCpp">
            <label htmlFor="cpp">Cities per Pages</label>
            <select id="cpp" onInput={selectHandler} className="select" name="">
              {
                pages.map((opt, index) => <option key={index} value={opt.value}>{opt.caption}</option>)
              }
            </select>
          </div>
        }
        <div className="cards-cont">
          { datos.response=="Loading" ?
            <h2>Loading...</h2>
          :
          datos.response?.length ? datos.response.map((ciudad) => <CardCity key={ciudad._id} ciudad={ciudad}/>)
          : <CardCity ciudad={cityNotFound} set={setFiltro}/>
        }
        </div>
        {filtro || count == 0 ? 
          <></>
        :
          <ButtonBar pausar={()=>{}} set={setIndex} datos={datos} index={index}/>
        }
      </div>
    </main>
  );
}
